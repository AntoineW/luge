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
      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)

      const reveal = {}

      reveal.name = Helpers.toCamelCase(element.getAttribute('data-lg-reveal'))
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

      if (reveal.stagger) {
        Array.from(element.children).forEach(child => {
          child.setAttribute('data-lg-reveal-child', '')
        })
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
                child.setAttribute('data-lg-reveal-state', 'is-in')
              }, index * element.reveal.stagger * 1000)
            })
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
        if (element.viewportPosition === 'above') {
          state = 'is-out is-out--top'
        } else if (element.viewportPosition === 'under') {
          state = 'is-out is-out--bottom'
        }

        element.setAttribute('data-lg-reveal-state', state)

        if (element.reveal.stagger) {
          Array.from(element.children).forEach((child, index) => {
            setTimeout(() => {
              child.setAttribute('data-lg-reveal-state', state)
            }, index * element.reveal.stagger * 1000)
          })
        }
      })

      this.toRevealIn = []
      this.toRevealOut = []
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
