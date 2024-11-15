import Helpers from '../core/Helpers'
import Plugin from '../core/Plugin'

export default class Reveal extends Plugin {
  /**
   * Constructor
   */
  constructor (luge) {
    super('reveal')

    this.luge = luge

    this.elements = []
    this.toRevealIn = []
    this.toRevealOut = []
    this.removed = []

    this.reveals = {
      in: {},
      out: {}
    }
    this.canReveal = false

    // Listeners
    this.onScrollProgress = this.onScrollProgress.bind(this)

    luge.reveal = {
      add: this.add.bind(this)
    }
  }

  /**
   * Init
   */
  init () {
    super.init()

    this.luge.lifecycle.add('pageInit', this.pageInit.bind(this), 11)
    this.luge.lifecycle.add('pageKill', this.pageKill.bind(this))
    this.luge.lifecycle.add('reveal', this.reveal.bind(this))

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    super.setAttributes()

    this.pluginAttributes = {
      root: String,
      disable: String,
      stagger: String,
      manual: [Boolean, false],
      multiple: Boolean,
      delay: [Number, 0]
    }
  }

  /**
   * Get attributes
   */
  getAttributes (element) {
    const data = super.getAttributes(element)

    if (data.stagger !== undefined && data.stagger === '') {
      data.stagger = this.luge._settings.reveal.stagger
    } else if (data.stagger === undefined) {
      data.stagger = false
    }

    return data
  }

  /**
   * Bind events
   */
  bindEvents () {
    this.luge.emitter.on('resize', this.resizeHandler, this)
    this.luge.emitter.on('scroll', this.scrollHandler, this)
    this.luge.emitter.on('update', this.updateHandler, this)
    this.luge.emitter.on('afterScrollUpdate', this.afterScrollUpdateHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    this.addElements()

    done()
  }

  /**
   * Add elements
   */
  addElements () {
    const elements = document.querySelectorAll('[data-lg-reveal]')
    const self = this

    elements.forEach(element => {
      const attributes = this.getAttributes(element)

      const disable = attributes.disable
      let enable = true

      const browser = (this.luge.browser || {})

      if (disable && browser.is) {
        if ((disable === 'desktop' && browser.is('desktop')) ||
            (disable === 'handheld' && !browser.is('desktop')) ||
            (disable === 'mobile' && browser.is('mobile')) ||
            (disable === 'tablet' && browser.is('tablet'))) {
          enable = false
        }
      }

      if (enable) {
        self.addElement(element)
      } else {
        element.setAttribute('data-lg-reveal-disabled', '')
      }
    })
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      const attributes = this.getAttributes(element)

      // Don't add child elements
      if (!attributes.stagger && element.closest('[data-lg-reveal-stagger]') !== null) {
        return
      }

      const revealName = attributes.root
      element.luge.reveal.name = Helpers.toCamelCase(revealName)

      if (!attributes.manual) {
        this.luge.scrollobserver.add(element)

        element.addEventListener('scrollprogress', this.onScrollProgress)
      } else {
        element.luge.reveal.in = () => {
          this.revealCallback(element, element.luge.reveal.name, 'in')
          this.setRevealClasses(element, 'is-in')
        }

        element.luge.reveal.out = () => {
          this.revealCallback(element, element.luge.reveal.name, 'out')
          this.setRevealClasses(element, 'is-out')
        }
      }

      element.luge.reveal.delay = attributes.delay * 1000

      if (attributes.stagger) {
        Array.from(element.children).forEach(child => {
          const childRevealName = child.dataset.lgReveal

          child.style.transition = 'none'
          this.luge.ticker.nextTick(() => {
            child.style.transition = ''
          })

          child.classList.add('lg-reveal', 'is-out')

          if (childRevealName || revealName) {
            child.classList.add('lg-reveal--' + (childRevealName ?? revealName))
          }

          child.dataset.lgRevealChild = ''
          if (child.luge || (child.luge = {})) {
            child.luge.reveal = {
              isRevealed: false
            }
          }
        })
      } else {
        element.style.transition = 'none'
        this.luge.ticker.nextTick(() => {
          element.style.transition = ''
        })

        element.classList.add('lg-reveal', 'is-out')

        if (revealName) {
          element.classList.add('lg-reveal--' + revealName)
        }
      }

      this.elements.push(element)
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element, single = false) {
    this.luge.scrollobserver.remove(element)
    element.removeEventListener('scrollprogress', this.onScrollProgress)

    if (single && this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
      this.removed.push(element)
    } else if (!single) {
      this.removed.push(element)
    }
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    const self = this

    this.canReveal = false

    this.elements.forEach(element => {
      self.removeElement(element)
    })

    this.elements = []

    done()
  }

  /**
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target

    this.checkElement(element)
  }

  /**
   * Check elements state
   */
  checkElements () {
    const threshold = this.luge._settings.reveal.threshold

    this.elements.forEach(element => {
      let state = ''

      if (element.scrollProgress >= threshold && element.scrollProgress <= (1 - threshold)) {
        state = 'is-in'
      } else if ((element.scrollProgress < threshold || (element.scrollProgress > (1 - threshold) && element.scrollEnd < Math.round(window.unifiedScrollTop)))) {
        state = 'is-out'
      }

      if (state !== '') {
        this.setRevealClasses(element, state)
        el.luge.reveal.isRevealed = (state === 'is-in')
      }
    })
  }

  /**
   * Check element
   * @param {HTMLElement} element
   */
  checkElement (element) {
    const threshold = this.luge._settings.reveal.threshold
    if (((element.scrollStart < 0 && Math.abs(element.scrollStart) / window.safeHeight) >= threshold) || (element.scrollProgress >= threshold && element.scrollProgress <= (1 - threshold) && !element.luge.reveal.isRevealed)) {
      if (this.toRevealOut.includes(element)) {
        this.toRevealOut.splice(this.toRevealOut.indexOf(element), 1)
      }

      if (!this.toRevealIn.includes(element)) {
        this.toRevealIn.push(element)
      }
    } else if ((element.scrollProgress < threshold || (element.scrollProgress > (1 - threshold) && element.scrollEnd < Math.round(window.unifiedScrollTop))) && element.luge.reveal.isRevealed) {
      if (this.toRevealIn.includes(element)) {
        this.toRevealIn.splice(this.toRevealIn.indexOf(element), 1)
      }

      if (!this.toRevealOut.includes(element)) {
        this.toRevealOut.push(element)
      }
    }
  }

  /**
   * Reveal
   * @param {Function} done Done function
   */
  reveal (done) {
    this.canReveal = true

    this.elements.forEach(element => {
      if (element.scrollStart < 0) {
        if (!this.toRevealIn.includes(element)) {
          this.toRevealIn.push(element)
        }
      }
    })

    this.revealElements()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.revealElements()
  }

  /**
   * Sroll handler
   */
  scrollHandler () {
    this.revealElements()
  }

  /**
   * Update handler
   */
  updateHandler () {
    this.addElements()
  }

  /**
   * After scroll update handler
   */
  afterScrollUpdateHandler () {
    this.revealElements()
  }

  /**
   * Reveal elements
   */
  revealElements () {
    const self = this

    if (this.canReveal) {
      let revealInTimeout = 0

      this.toRevealIn.forEach(element => {
        if (this.removed.includes(element)) {
          return
        }

        const delay = true
        const revealName = Helpers.toCamelCase(element.luge.reveal.root)

        revealInTimeout += element.luge.reveal.delay

        setTimeout(function () {
          self.revealCallback(element, revealName, 'in')

          if (element.luge.reveal.stagger) {
            Array.from(element.children).forEach((child, index) => {
              const childRevealName = Helpers.toCamelCase(child.dataset.lgReveal)

              setTimeout(() => {
                if (childRevealName || revealName) {
                  self.revealCallback(child, (childRevealName ?? revealName), 'in')
                }

                self.setRevealClasses(child, 'is-in')
              }, index * element.luge.reveal.stagger * 1000)
            })
          } else {
            self.setRevealClasses(element, 'is-in')
          }
        }, delay ? revealInTimeout : 0)

        if (delay) {
          revealInTimeout += this.luge._settings.reveal.stagger * 1000
        }

        if (!element.luge.reveal.multiple) {
          self.removeElement(element, true)
        }
      })

      this.toRevealOut.forEach(element => {
        const revealName = Helpers.toCamelCase(element.luge.reveal.root)

        if (element.luge.reveal.isRevealed !== undefined) {
          self.revealCallback(element, revealName, 'out')
        }

        let state = ''
        if (element.scrollProgress > 0.5) {
          state = 'is-out is-out-top'
        } else {
          state = 'is-out is-out-bottom'
        }

        if (element.luge.reveal.stagger) {
          Array.from(element.children).forEach((child, index) => {
            const childRevealName = Helpers.toCamelCase(child.dataset.lgReveal)

            setTimeout(() => {
              if (childRevealName || revealName) {
                self.revealCallback(child, (childRevealName ?? revealName), 'out')
              }

              self.setRevealClasses(child, state)
            }, index * element.luge.reveal.stagger * 1000)
          })
        } else {
          self.setRevealClasses(element, state)
        }
      })

      this.toRevealIn = []
      this.toRevealOut = []
    }
  }

  /**
   * Set reveal classes
   * @param {HTMLElement} el Element
   * @param {String} states Reveal states
   */
  setRevealClasses (el, states) {
    states = states.split(' ')

    el.classList.remove('is-in', 'is-out', 'is-out-top', 'is-out-bottom')

    states.forEach(state => {
      el.classList.add(state)
    })
  }

  /**
   * Call reveal callback
   * @param {HTMLElement} el Element
   */
  revealCallback (el, name, type) {
    el.dispatchEvent(new CustomEvent('reveal' + type))
    el.luge.reveal.isRevealed = (type === 'in')

    if (typeof this.reveals[type][name] === 'function') {
      this.reveals[type][name](el)
    } else if (typeof el['onreveal' + type] === 'function') {
      el['onreveal' + type]()
    }
  }

  /**
   * Add reveal animation
   * @param {String} type Reveal type (in | out)
   * @param {String} revealName Reveal animation name
   * @param {Function} callback Callback function
   */
  add (type, revealName, callback) {
    if (this.reveals[type]) {
      revealName = Helpers.toCamelCase(revealName)

      if (this.reveals[type][revealName]) {
        console.log('Reveal animation named ' + revealName + ' already exists.')
      } else {
        this.reveals[type][revealName] = callback
      }
    }
  }
}
