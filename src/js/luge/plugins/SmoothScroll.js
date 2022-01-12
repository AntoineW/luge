import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import Ticker from 'Core/Ticker'

class SmoothScroll extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('smooth')

    this.containers = null

    window.hasSmoothScroll = false
    window.smoothScrollTop = 0
    window.smoothScrollProgress = 0
  }

  /**
   * Init
   */
  init () {
    super.init()

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('update', this.updateHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const containers = document.querySelectorAll('[data-lg-smooth]')

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

      Ticker.remove(this.tick, this)
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
    this.setBounding()
  }

  /**
   * Update handler
   */
  updateHandler () {
    this.setBounding()
  }

  /**
   * Set elements bouding
   */
  setBounding () {
    if (this.containers) {
      // Reset style
      this.containers.forEach(function (container) { container.el.removeAttribute('style') })

      this.containers.forEach(function (container) {
        const parent = container.el.parentNode

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
      window.smoothScrollTop = Math.max(window.smoothScrollTop + ((window.scrollTop - window.smoothScrollTop) * Luge.settings.smooth.inertia), 0)

      // Round smooth scroll
      const gap = window.smoothScrollTop - window.scrollTop
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
        window.smoothScrollProgress = window.smoothScrollTop / window.maxScrollTop
        Emitter.emit('scroll')
      }
    }
  }
}

export default new SmoothScroll()
