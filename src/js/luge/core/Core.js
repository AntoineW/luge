import LifeCycle from './LifeCycle'
import Emitter from './Emitter'
import Helpers from './Helpers'

class Luge {
  /**
   * Constructor
   */
  constructor () {
    // Options
    this.settings = Helpers.deepFreeze({
      cursor: {
        inertia: 1,
        trailLength: 10
      },
      intersection: {
        threshold: 0.3
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
        inertia: 0.1
      },
      ticker: {
        external: false
      },
      transition: {
        reload: false
      },
      credits: {
        show: true
      }
    })

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

    LifeCycle.add('siteInit', this.siteInit.bind(this), 999)

    this.bindEvents()
  }

  /**
   * Set settings
   */
  setSettings (settings) {
    this.settings = Helpers.deepFreeze(Helpers.mergeDeep(this.settings, settings))
  }

  /**
   * Site initialization
   * @param {Function} done Done function
   */
  siteInit (done) {
    this.showCredits()

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

    // Backward compatibility
    window.unifiedScrollTop = window.scrollTop

    if (!this.isScrolling) {
      this.scrollStart()
    }

    clearTimeout(this.timeouts.scrollEnd)
    this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200)

    this.previousScrollTop = window.scrollTop
    window.scrollProgress = window.scrollTop / window.maxScrollTop

    Emitter.emit('scroll')
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

  /**
   * Show credits
   */
  showCredits () {
    if (this.settings.credits.show) {
      // Output version
      const consoleBaseStyle = 'background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; '
      const consoleBoldStyle = consoleBaseStyle + 'font-weight: bold; '
      const consoleWhiteStyle = 'color: black; font: 400 1em monospace; padding: 0.5em 0; '

      console.log('%c powered by %cluge%c / ' + VERSION + ' %c > https://luge.cool ', consoleBaseStyle, consoleBoldStyle, consoleBaseStyle, consoleWhiteStyle)
    }
  }
}

export default new Luge()
