import Actions from 'Luge/Actions'

const emitter = require('tiny-emitter/instance')

class SmoothScroll {
  /**
   * Constructor
   */
  constructor () {
    // Disable smooth scroll on light browsers
    if (window.browser.light) {
      return
    }

    this.containers = null
    this.inertia = 0.1
    this.hasSmoothScroll = false
    window.smoothScrollTop = 0

    Actions.add('pageInit', this.pageInit.bind(this))
    Actions.add('pageKill', this.pageKill.bind(this))

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    emitter.on('resize', this.resizeHandler, this)
  }

  /**
   * Init
   */
  pageInit (done) {
    var containers = document.querySelectorAll('[data-lg-smooth]')

    if (containers) {
      window.smoothScrollTop = window.scrollTop
      this.hasSmoothScroll = true
      document.documentElement.classList.add('has-smooth-scroll')
    } else {
      window.smoothScrollTop = 0
      this.hasSmoothScroll = false
      document.documentElement.classList.remove('has-smooth-scroll')
    }

    this.containers = Array.from(containers).map(element => (
      {
        el: element,
        bounding: element.getBoundingClientRect()
      }))

    cancelAnimationFrame(this.requestId)
    this.requestId = requestAnimationFrame(this.rafAnimation.bind(this))

    this.resizeHandler()

    done()
  }

  /**
   * Kill
   */
  pageKill (done) {
    this.containers = null

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    if (this.containers) {
      // Reset style
      this.containers.forEach(function (container) { container.el.removeAttribute('style') })

      this.containers.forEach(function (container) {
        var parent = container.el.parentNode

        // Get bounding
        container.bounding = container.el.getBoundingClientRect()

        parent.style.height = (container.bounding.bottom + window.scrollTop) + 'px'

        // Set container
        container.el.style.position = 'fixed'
        container.el.style.transform = 'translate3d(0, -' + window.smoothScrollTop + 'px, 0)'
        container.el.style.left = 0
        container.el.style.width = '100%'
        container.el.style.willChange = 'transform'
      })
    }
  }

  /**
   * Raf animation
   */
  rafAnimation () {
    if (window.smoothScrollTop !== window.scrollTop) {
      window.smoothScrollTop = window.smoothScrollTop + ((window.scrollTop - window.smoothScrollTop) * this.inertia)

      // Round smooth scroll
      var gap = window.smoothScrollTop - window.scrollTop
      if (gap > -0.1 && gap < 0.1) {
        window.smoothScrollTop = window.scrollTop
      }

      if (this.containers) {
        this.containers.forEach(function (container) {
          container.el.style.transform = 'translate3d(0, -' + window.smoothScrollTop + 'px, 0)'
        })
      }

      if (this.hasSmoothScroll) {
        emitter.emit('scroll')
      }
    }

    this.requestId = requestAnimationFrame(this.rafAnimation.bind(this))
  }
}

export default new SmoothScroll()
