import Actions from 'Luge/Actions'
import Emitter from 'Luge/Emitter'

class Reveal {
  /**
   * Constructor
   */
  constructor () {
    this.elements = []
    this.reveals = {
      in: {},
      out: {}
    }
    this.canReveal = false

    Actions.add('pageInit', this.pageInit.bind(this))
    Actions.add('pageKill', this.pageKill.bind(this))
    Actions.add('reveal', this.reveal.bind(this))

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
   * Init
   */
  pageInit (done) {
    var elements = document.querySelectorAll('[data-lg-reveal]:not([data-lg-reveal-manual])')

    this.elements = Array.from(elements).map(element => (
      {
        el: element,
        name: element.getAttribute('data-lg-reveal')
      }
    ))

    this.setBounding()

    done()
  }

  /**
   * Kill
   */
  pageKill (done) {
    this.canReveal = false
    this.elements = []

    done()
  }

  /**
   * Reveal
   */
  reveal (done) {
    this.canReveal = true

    this.checkElements()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.setBounding()
    this.checkElements()
  }

  /**
   * Set bounding
   */
  setBounding () {
    var scrollTop = (window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop)
    scrollTop = Math.max(scrollTop, 0)

    this.elements.forEach(element => {
      element.bounding = element.el.getBoundingClientRect()
      element.start = element.bounding.top + scrollTop - window.innerHeight
      element.middle = element.start + element.el.clientHeight / 2
      element.end = element.start + element.el.clientHeight + window.innerHeight
    })
  }

  /**
   * Sroll handler
   */
  scrollHandler () {
    this.checkElements()
  }

  /**
   * Check position
   */
  checkElements () {
    if (this.canReveal) {
      var scrollTop = window.scrollTop
      scrollTop = Math.max(scrollTop, 0)

      var self = this
      var threshold = window.innerHeight * 0.15
      var revealInDelay = 200
      var revealInTimeout = 0

      this.elements.forEach(function (element, index) {
        var state = ''
        var isIn = false
        var delay = true
        var isOut = false

        if (scrollTop > element.end - threshold) {
          if (element.el.getAttribute('data-lg-reveal-state') === null && !element.el.hasAttribute('data-lg-reveal-multiple')) {
            // Show element when above the viewport
            isIn = true
            state = 'is-in'
            delay = false
          } else {
            isOut = true
            state = 'is-out is-out--top'
          }
        } else if (scrollTop < element.start + threshold) {
          isOut = true
          state = 'is-out is-out--bottom'
        } else {
          isIn = true
          state = 'is-in'

          if (element.el.hasAttribute('data-lg-reveal-multiple')) {
            if (scrollTop < element.middle) {
              state += ' is-in--bottom'
            } else {
              state += ' is-in--top'
            }
          }
        }

        if (element.el.getAttribute('data-lg-reveal-state') !== state) {
          if (isIn) {
            setTimeout(function () {
              element.el.dispatchEvent(new CustomEvent('revealIn'))

              if (typeof self.reveals.in[element.name] === 'function') {
                self.reveals.in[element.name](element.el)
              }

              element.el.setAttribute('data-lg-reveal-state', state)
            }, delay ? revealInTimeout : 0)

            if (delay) {
              revealInTimeout += revealInDelay
            }
          } else if (isOut) {
            if (element.el.hasAttribute('data-lg-reveal-state')) {
              element.el.dispatchEvent(new CustomEvent('revealOut'))

              if (typeof self.reveals.out[element.name] === 'function') {
                self.reveals.out[element.name](element.el)
              }
            }

            element.el.setAttribute('data-lg-reveal-state', state)
          }
        }

        if (isIn && !element.el.hasAttribute('data-lg-reveal-multiple')) {
          delete self.elements[index]
        }
      })
    }
  }

  /**
   * Add reveal animation
   */
  add (type, revealName, callback) {
    if (this.reveals[type]) {
      if (this.reveals[type][revealName]) {
        console.log('Reveal animation named ' + revealName + ' already exists.')
      } else {
        this.reveals[type][revealName] = callback
      }
    }
  }
}

export default new Reveal()
