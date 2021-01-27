import Bowser from 'bowser'
import Actions from 'Luge/Actions'
import Emitter from 'Luge/Emitter'

class Luge {
  constructor () {
    // Options
    this.settings = {
      smoothInertia: 0.1
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
    this.previousScrollTop = window.pageYOffset
    this.isScrolling = false
    this.hasSmoothScroll = false

    // Mouse
    window.mouseX = 0
    window.mouseY = 0

    // Browser detect
    window.browser = Bowser.getParser(window.navigator.userAgent)
    var isLight = false

    Boolean(window.browser.satisfies({
      safari: '<12',
      'internet explorer': '>0',
      mobile: {}
    }))

    if (window.browser.is('mobile') || window.browser.is('tablet')) {
      isLight = true

      document.documentElement.classList.add('is-mobile')
    } else {
      document.documentElement.classList.add('is-desktop')
    }

    if (window.browser.is('Internet Explorer')) {
      isLight = true

      document.documentElement.classList.add('is-ie')
      document.documentElement.classList.add('is-ie--' + window.browser.getBrowserVersion())
    } else if (window.browser.is('Safari')) {
      if (window.browser.getBrowserVersion() < 12) {
        isLight = true
      }

      document.documentElement.classList.add('is-safari')
      document.documentElement.classList.add('is-safari-' + window.browser.getBrowserVersion())
    }

    if (isLight) {
      window.browser.light = true
      document.documentElement.classList.add('is-light')
    }

    Actions.add('siteInit', this.siteInit.bind(this), 999)
    Actions.add('pageInit', this.pageInit.bind(this), 999)

    this.bindEvents()
  }

  /**
   * Site initialization
   */
  siteInit (done) {
    this.scrollHandler()

    done()
  }

  /**
   * Page init
   */
  pageInit (done) {
    this.hasSmoothScroll = document.documentElement.classList.contains('has-smooth-scroll')

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

    if (!this.hasSmoothScroll) {
      Emitter.emit('scroll')
    }
  }

  /**
   * Scroll start
   */
  scrollStart () {
    this.isScrolling = true

    // Pause videos on scroll
    document.querySelectorAll('video').forEach(video => {
      if (!video.paused) {
        video.classList.add('was-playing')
        video.pause()
      }
    })
    document.documentElement.classList.add('is-scrolling')

    Emitter.emit('startScroll')
  }

  /**
   * Scroll end
   */
  scrollEnd () {
    this.isScrolling = false

    // Resume videos after scroll
    document.querySelectorAll('video').forEach(video => {
      if (video.classList.contains('was-playing')) {
        video.classList.remove('was-playing')
        video.play()
      }
    })
    document.documentElement.classList.remove('is-scrolling')

    Emitter.emit('endScroll')
  }
}
var luge = new Luge()

export { luge as default }
