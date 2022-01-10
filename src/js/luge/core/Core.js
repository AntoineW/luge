import Bowser from 'bowser'
import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Helpers from 'Core/Helpers'

class Luge {
  /**
   * Constructor
   */
  constructor () {
    // Options
    this.settings = {
      cursor: {
        disabled: ['tablet', 'mobile'],
        inertia: 1,
        trailLength: 10
      },
      lottie: {
        renderer: 'svg',
        subFrame: true
      },
      mouse: {
        inertia: 0.1
      },
      parallax: {
        inertia: 0.1
      },
      preloader: {
        duration: 0
      },
      reveal: {
        stagger: 0.1,
        threshold: 0.15
      },
      scroll: {
        inertia: 0.1
      },
      smooth: {
        disabled: ['tablet', 'mobile', { safari: '<=12' }],
        inertia: 0.1
      },
      sticky: {
        disabled: ['tablet', 'mobile']
      },
      ticker: {
        external: false
      },
      transition: {
        reload: false
      }
    }

    // Timeouts
    this.timeouts = {
      resizeThrottle: null,
      scrollEnd: null
    }

    // Viewport size
    this.windowWidth = 1
    this.windowHeight = 1
    this.clientWidth = 1

    // Scroll
    window.scrollTop = window.scrollY
    window.unifiedScrollTop = window.scrollTop
    window.maxScrollTop = 1
    window.scrollProgress = 0
    this.previousScrollTop = window.scrollY
    this.isScrolling = false

    // Mouse
    window.mouseX = -1
    window.mouseY = -1
    window.mouseLastScrollTop = 0

    // Browser detect
    window.browser = Bowser.getParser(window.navigator.userAgent)

    // Platform type class
    document.documentElement.classList.add('is-' + window.browser.getPlatformType())

    if (window.browser.is('mobile') || window.browser.is('tablet')) {
      document.documentElement.classList.add('is-handheld')
    }

    // Browser class
    if (window.browser.is('Safari')) {
      document.documentElement.classList.add('is-safari')
      document.documentElement.classList.add('is-safari-' + window.browser.getBrowserVersion())
    }

    LifeCycle.add('siteInit', this.siteInit.bind(this), 999)

    this.bindEvents()
  }

  /**
   * Set settings
   */
  setSettings (settings) {
    this.settings = Helpers.mergeDeep(this.settings, settings)
  }

  /**
   * Site initialization
   * @param {Function} done Done function
   */
  siteInit (done) {
    this.setCSSProperties()

    this.scrollHandler()

    done()
  }

  /**
   * Bind events
   */
  bindEvents () {
    window.addEventListener('mousemove', this.mouseHandler.bind(this), { passive: true })
    window.addEventListener('resize', this.resizeThrottle.bind(this))
    window.addEventListener('scroll', this.scrollHandler.bind(this), { passive: true })
  }

  /**
   * Mouse handler
   * @param {Event} e Mouse event
   */
  mouseHandler (e) {
    const mouseX = e.pageX
    const mouseY = e.pageY - window.scrollTop

    window.mouseX = mouseX
    window.mouseY = mouseY

    Emitter.emit('mouseMove', e)
  }

  /**
   * Resize throttle
   */
  resizeThrottle () {
    clearTimeout(this.timeouts.resizeThrottle)
    this.timeouts.resizeThrottle = setTimeout(this.resizeHandler.bind(this), 200)
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.setCSSProperties()

    Emitter.emit('resize')
  }

  /**
   * Set CSS propertiers
   */
  setCSSProperties () {
    // Pass window widths to CSS
    const newWidth = window.innerWidth
    if (this.windowWidth !== newWidth) {
      this.windowWidth = newWidth
      this.clientWidth = document.body.clientWidth
    }

    // Pass window height to CSS
    const newHeight = window.innerHeight
    if (this.windowHeight !== newHeight) {
      this.windowHeight = newHeight
      this.clientHeight = document.body.clientHeight
    }

    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--vw', (this.windowWidth * 0.01) + 'px')
      document.documentElement.style.setProperty('--cw', (this.clientWidth * 0.01) + 'px')

      document.documentElement.style.setProperty('--vh', (this.windowHeight * 0.01) + 'px')
      document.documentElement.style.setProperty('--ch', (this.clientHeight * 0.01) + 'px')
    })
  }

  /**
   * Scroll handler
   */
  scrollHandler () {
    window.scrollTop = window.scrollY

    if (!this.isScrolling) {
      this.scrollStart()
    }

    clearTimeout(this.timeouts.scrollEnd)
    this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200)

    this.previousScrollTop = window.scrollTop
    window.scrollProgress = window.scrollTop / window.maxScrollTop

    if (!window.hasSmoothScroll) {
      window.unifiedScrollTop = window.scrollTop
      Emitter.emit('scroll')
    }
  }

  /**
   * Scroll start
   */
  scrollStart () {
    this.isScrolling = true

    document.documentElement.classList.add('is-scrolling')

    Emitter.emit('scrollStart')
  }

  /**
   * Scroll end
   */
  scrollEnd () {
    this.isScrolling = false

    document.documentElement.classList.remove('is-scrolling')

    Emitter.emit('scrollEnd')
  }
}

export default new Luge()
