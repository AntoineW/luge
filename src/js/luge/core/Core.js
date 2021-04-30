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
      externalTicker: false,
      lottieRenderer: 'svg',
      lottieNoSubFrame: false,
      scrollInertia: 0,
      smoothInertia: 0.1,
      preloaderDuration: 0,
      revealStagger: 0.1,
      revealThreshold: 0.15,
      smooth: {
        disabled: ['tablet', 'mobile', { safari: '<=12' }]
      },
      sticky: {
        disabled: ['tablet', 'mobile']
      }
    }

    // Timeouts
    this.timeouts = {
      resizeThrottle: null,
      scrollEnd: null
    }

    // Viewport size
    this.windowWidth = 0
    this.windowHeight = 0
    this.clientWidth = 0

    // Scroll
    window.scrollTop = window.pageYOffset
    window.unifiedScrollTop = window.scrollTop
    this.previousScrollTop = window.pageYOffset
    this.isScrolling = false

    // Mouse
    window.mouseX = 0
    window.mouseY = 0

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
    window.mouseX = e.pageX
    window.mouseY = e.pageY

    Emitter.emit('mouseMove', e)
  }

  /**
   * Resize throttle
   */
  resizeThrottle () {
    clearTimeout(this.timeouts.resizeThrottle)
    this.timeouts.resizeThrottle = setTimeout(this.resizeHandler, 200)
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    // Pass window widths to CSS
    if (this.windowWidth !== window.innerWidth) {
      this.windowWidth = window.innerWidth
      this.clientWidth = document.body.clientWidth

      document.documentElement.style.setProperty('--vw', (this.windowWidth * 0.01) + 'px')
      document.documentElement.style.setProperty('--cw', (this.clientWidth * 0.01) + 'px')
    }

    // Pass window height to CSS
    if (this.windowHeight !== window.innerHeight) {
      this.windowHeight = window.innerHeight
      this.clientHeight = document.body.clientHeight

      document.documentElement.style.setProperty('--vh', (this.windowHeight * 0.01) + 'px')
      document.documentElement.style.setProperty('--ch', (this.clientHeight * 0.01) + 'px')
    }

    Emitter.emit('resize')
  }

  /**
   * Scroll handler
   */
  scrollHandler () {
    if (window.browser.is('desktop') && window.pageYOffset) {
      window.scrollTop = window.pageYOffset
    } else {
      window.scrollTop = window.scrollY
    }

    if (!this.isScrolling) {
      this.scrollStart()
    }

    clearTimeout(this.timeouts.scrollEnd)
    this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200)

    this.previousScrollTop = window.scrollTop

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
