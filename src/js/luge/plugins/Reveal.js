import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Helpers from 'Core/Helpers'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import ScrollObserver from 'Core/ScrollObserver'
import Ticker from 'Core/Ticker'

class Reveal extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('reveal')

    if (this.isDisabled) {
      return
    }

    this.elements = []
    this.toRevealIn = []
    this.toRevealOut = []

    this.reveals = {
      in: {},
      out: {}
    }
    this.canReveal = false

    // Listeners
    this.onScrollProgress = this.onScrollProgress.bind(this)

    LifeCycle.add('pageInit', this.pageInit.bind(this), 11)
    LifeCycle.add('pageKill', this.pageKill.bind(this))
    LifeCycle.add('reveal', this.reveal.bind(this))

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    super.setAttributes()

    this.pluginAttributes = {
      root: String,
      stagger: String,
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
      data.stagger = Luge.settings.reveal.stagger
    } else if (data.stagger === undefined) {
      data.stagger = false
    }

    return data
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('scroll', this.scrollHandler, this)
    Emitter.on('update', this.updateHandler, this)
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
    const elements = document.querySelectorAll('[data-lg-reveal]:not([data-lg-reveal-manual])')
    const self = this

    elements.forEach(element => {
      self.addElement(element)
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

      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)

      const revealName = attributes.root

      element.luge.reveal.name = Helpers.toCamelCase(revealName)
      element.luge.reveal.delay = attributes.delay * 1000

      if (attributes.stagger) {
        Array.from(element.children).forEach(child => {
          const childRevealName = child.dataset.lgReveal

          child.style.transition = 'none'
          Ticker.nextTick(() => {
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
        Ticker.nextTick(() => {
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
  removeElement (element) {
    element.removeEventListener('scrollprogress', this.onScrollProgress)

    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
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

    done()
  }

  /**
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target
    const threshold = Luge.settings.reveal.threshold

    if (element.scrollProgress >= threshold && element.scrollProgress <= (1 - threshold) && !element.luge.reveal.isRevealed) {
      if (this.toRevealOut.includes(element)) {
        this.toRevealOut.splice(this.toRevealOut.indexOf(element), 1)
      }

      if (!this.toRevealIn.includes(element)) {
        this.toRevealIn.push(element)
      }
    } else if ((element.scrollProgress < threshold || element.scrollProgress > (1 - threshold)) && element.luge.reveal.isRevealed) {
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
          revealInTimeout += Luge.settings.reveal.stagger * 1000
        }

        if (!element.luge.reveal.multiple) {
          self.removeElement(element)
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

export default new Reveal()
