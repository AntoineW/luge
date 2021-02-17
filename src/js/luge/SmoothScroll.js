import LifeCycle from 'Luge/LifeCycle'
import Emitter from 'Luge/Emitter'
import Luge from 'Luge/Core'
import Ticker from 'Luge/Ticker'

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
    window.hasSmoothScroll = false
    window.smoothScrollTop = 0

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    var containers = document.querySelectorAll('[data-lg-smooth]')

    if (containers.length > 0) {
      window.smoothScrollTop = window.scrollTop
      window.unifiedScrollTop = window.smoothScrollTop
      window.hasSmoothScroll = true
      document.documentElement.classList.add('has-smooth-scroll')

      this.containers = Array.from(containers).map(element => (
        {
          el: element,
          bounding: element.getBoundingClientRect()
        }))

      Ticker.add(this.tick, this)
    } else {
      window.smoothScrollTop = 0
      window.unifiedScrollTop = window.scrollTop
      window.hasSmoothScroll = false
      document.documentElement.classList.remove('has-smooth-scroll')

      this.containers = null

      Ticker.remove(this.tick)
    }

    this.resizeHandler()

    done()
  }

  /**
   * Kill
   * @param {Function} done Done function
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
  tick () {
    if (window.smoothScrollTop !== window.scrollTop) {
      window.smoothScrollTop = window.smoothScrollTop + ((window.scrollTop - window.smoothScrollTop) * Luge.settings.smoothInertia)

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

      if (window.hasSmoothScroll) {
        window.unifiedScrollTop = window.smoothScrollTop
        Emitter.emit('scroll')
      }
    }
  }
}

export default new SmoothScroll()
