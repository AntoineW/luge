import LifeCycle from 'Luge/LifeCycle'
import Emitter from 'Luge/Emitter'
import Helpers from 'Luge/Helpers'
import Luge from 'Luge/Core'
import ScrollObserver from 'Luge/ScrollObserver'

class Reveal {
  /**
   * Constructor
   */
  constructor () {
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
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('scroll', this.scrollHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const elements = document.querySelectorAll('[data-lg-reveal]:not([data-lg-reveal-manual])')
    const self = this

    elements.forEach(element => {
      self.addElement(element)
    })

    done()
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      // Don't add child elements
      if (!element.hasAttribute('data-lg-reveal-stagger') && element.closest('[data-lg-reveal-stagger]') !== null) {
        return
      }

      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)

      const reveal = {}
      const revealName = element.getAttribute('data-lg-reveal')

      reveal.name = Helpers.toCamelCase(revealName)
      reveal.multiple = element.hasAttribute('data-lg-reveal-multiple')

      if (element.hasAttribute('data-lg-reveal-stagger')) {
        if (String(element.getAttribute('data-lg-reveal-stagger')) !== '') {
          reveal.stagger = element.getAttribute('data-lg-reveal-stagger')
        } else {
          reveal.stagger = Luge.settings.revealStagger
        }
      } else {
        reveal.stagger = false
      }

      if (element.hasAttribute('data-lg-reveal-delay')) {
        reveal.delay = Number(element.getAttribute('data-lg-reveal-delay')) * 1000
      } else {
        reveal.delay = 0
      }

      if (reveal.stagger) {
        Array.from(element.children).forEach(child => {
          const childRevealName = child.getAttribute('data-lg-reveal')

          child.classList.add('lg-reveal', 'is-out')

          if (childRevealName || revealName) {
            child.classList.add('lg-reveal--' + (childRevealName ?? revealName))
          }

          child.setAttribute('data-lg-reveal-child', '')
        })
      } else {
        element.classList.add('lg-reveal', 'is-out')

        if (revealName) {
          element.classList.add('lg-reveal--' + revealName)
        }
      }

      element.reveal = reveal

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
    const threshold = Luge.settings.revealThreshold

    if (element.scrollProgress >= threshold && element.scrollProgress <= (1 - threshold) && !element.isRevealed) {
      if (this.toRevealOut.includes(element)) {
        this.toRevealOut.splice(this.toRevealOut.indexOf(element), 1)
      }

      if (!this.toRevealIn.includes(element)) {
        this.toRevealIn.push(element)
      }
    } else if ((element.scrollProgress < threshold || element.scrollProgress > (1 - threshold)) && element.isRevealed) {
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
   * Reveal elements
   */
  revealElements () {
    const self = this

    if (this.canReveal) {
      let revealInTimeout = 0

      this.toRevealIn.forEach(element => {
        const delay = true
        const revealName = element.getAttribute('data-lg-reveal')

        revealInTimeout += element.reveal.delay

        setTimeout(function () {
          element.dispatchEvent(new CustomEvent('revealin'))
          element.isRevealed = true

          if (typeof self.reveals.in[element.reveal.name] === 'function') {
            self.reveals.in[element.reveal.name](element)
          } else if (typeof element.onrevealin === 'function') {
            element.onrevealin()
          }

          element.setAttribute('data-lg-reveal-state', 'is-in')

          if (element.reveal.stagger) {
            Array.from(element.children).forEach((child, index) => {
              setTimeout(() => {
                self.setRevealClasses(child, revealName, 'is-in')
                child.setAttribute('data-lg-reveal-state', 'is-in')
              }, index * element.reveal.stagger * 1000)
            })
          } else {
            self.setRevealClasses(element, revealName, 'is-in')
          }
        }, delay ? revealInTimeout : 0)

        if (delay) {
          revealInTimeout += Luge.settings.revealStagger * 1000
        }

        if (!element.hasAttribute('data-lg-reveal-multiple')) {
          self.removeElement(element)
        }
      })

      this.toRevealOut.forEach(element => {
        const revealName = element.getAttribute('data-lg-reveal')

        if (element.hasAttribute('data-lg-reveal-state')) {
          element.dispatchEvent(new CustomEvent('revealout'))
          element.isRevealed = false

          if (typeof self.reveals.out[element.reveal.name] === 'function') {
            self.reveals.out[element.reveal.name](element)
          } else if (typeof element.onrevealout === 'function') {
            element.onrevealout()
          }
        }

        let state = ''
        if (element.scrollProgress > 0.5) {
          state = 'is-out is-out-top'
        } else {
          state = 'is-out is-out-bottom'
        }

        element.setAttribute('data-lg-reveal-state', state)

        if (element.reveal.stagger) {
          Array.from(element.children).forEach((child, index) => {
            setTimeout(() => {
              self.setRevealClasses(child, revealName, state)
              child.setAttribute('data-lg-reveal-state', state)
            }, index * element.reveal.stagger * 1000)
          })
        } else {
          self.setRevealClasses(element, revealName, state)
        }
      })

      this.toRevealIn = []
      this.toRevealOut = []
    }
  }

  /**
   * Set reveal classes
   * @param {HTMLElement} el Element
   * @param {String} name Reveal name
   * @param {String} states Reveal states
   */
  setRevealClasses (el, name, states) {
    states = states.split(' ')
    name = 'lg-reveal--' + name

    el.classList.remove('is-in', 'is-out', 'is-out-top', 'is-out-bottom')

    states.forEach(state => {
      el.classList.add(state)
    })
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
