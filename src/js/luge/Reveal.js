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
    this.onViewportIntersect = this.onViewportIntersect.bind(this)

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
    var elements = document.querySelectorAll('[data-lg-reveal]:not([data-lg-reveal-manual])')
    var self = this

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

      element.addEventListener('viewportintersect', this.onViewportIntersect)

      this.elements.push(element)
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element) {
    ScrollObserver.remove(element)

    element.removeEventListener('viewportintersect', this.onViewportIntersect)

    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
    }
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    var self = this

    this.canReveal = false

    this.elements.forEach(element => {
      self.removeElement(element)
    })

    done()
  }

  /**
   * viewportintersect event handler
   * @param {Event} e Custom event
   */
  onViewportIntersect (e) {
    var element = e.target

    if (element.viewportPosition === 'in') {
      if (this.toRevealOut.includes(element)) {
        this.toRevealOut.splice(this.toRevealOut.indexOf(element), 1)
      }

      if (!this.toRevealIn.includes(element)) {
        this.toRevealIn.push(element)
      }
    } else {
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
    var self = this

    if (this.canReveal) {
      var revealInTimeout = 0

      this.toRevealIn.forEach(element => {
        var name = Helpers.toCamelCase(element.getAttribute('data-lg-reveal'))

        var delay = true
        if (element.getAttribute('data-lg-reveal-state') === null) {
          delay = false
        }

        setTimeout(function () {
          element.dispatchEvent(new CustomEvent('revealin'))

          if (typeof self.reveals.in[name] === 'function') {
            self.reveals.in[name](element)
          } else if (typeof element.onrevealin === 'function') {
            element.onrevealin()
          }

          element.setAttribute('data-lg-reveal-state', 'is-in')
        }, delay ? revealInTimeout : 0)

        if (delay) {
          revealInTimeout += Luge.settings.revealStagger * 1000
        }

        if (!element.hasAttribute('data-lg-reveal-multiple')) {
          self.removeElement(element)
        }
      })

      this.toRevealOut.forEach(element => {
        var name = Helpers.toCamelCase(element.getAttribute('data-lg-reveal'))

        if (element.hasAttribute('data-lg-reveal-state')) {
          element.dispatchEvent(new CustomEvent('revealout'))

          if (typeof self.reveals.out[name] === 'function') {
            self.reveals.out[name](element)
          } else if (typeof element.onrevealout === 'function') {
            element.onrevealout()
          }
        }

        if (element.viewportPosition === 'above') {
          var state = 'is-out is-out--top'
        } else if (element.viewportPosition === 'under') {
          state = 'is-out is-out--bottom'
        }

        element.setAttribute('data-lg-reveal-state', state)
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
