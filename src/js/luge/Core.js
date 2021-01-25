import Bowser from 'bowser'

const emitter = require('tiny-emitter/instance')

export default class Luge {
  constructor () {
    // Site actions
    this.actions = {
      siteInit: {},
      pageInit: {},
      siteIn: {},
      pageIn: {},
      reveal: {},
      pageFetch: {},
      pageOut: {},
      pageCreate: {},
      pageKill: {}
    }

    for (var action in this.actions) {
      this.actions[action].callbacks = []
      this.actions[action].done = 0
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

    // Mouse
    window.mouseX = 0
    window.mouseY = 0

    // Init
    this.firstInit = true
    this.wait = {
      ready: {
        site: true,
        page: true
      },
      transition: {
        fetch: true,
        out: true
      }
    }

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

    this.bindEvents()
  }

  /**
   * Hook callback to action
   * @param {String} actionName Action name
   * @param {Function} callback Callback function
   */
  addAction (actionName, callback) {
    if (this.actions[actionName]) {
      // console.log('addAction', actionName)
      this.actions[actionName].callbacks.push(callback)
    }
  }

  /**
   * Call hooked callbacks
   * @param {String} actionName Action name
   */
  doAction (actionName) {
    this.actions[actionName].done = 0

    if (this.actions[actionName].callbacks.length > 0) {
      for (var i = 0; i < this.actions[actionName].callbacks.length; i++) {
        this.actions[actionName].callbacks[i](() => this.doneAction(actionName))
      }
    } else {
      this.doneAction(actionName)
    }
  }

  /**
   * Count done action
   * @param {String} actionName Action name
   */
  doneAction (actionName) {
    this.actions[actionName].done++

    // All callback are done, call next action
    if (this.actions[actionName].done >= this.actions[actionName].callbacks.length) {
      if (actionName === 'siteInit') {
        this.doAction('pageInit')
      } else if (actionName === 'pageInit') {
        if (!this.wait.ready.page) {
          this.doAction('pageIn')
        } else {
          this.waitReady('page')
        }
      } else if (actionName === 'siteIn') {
        this.doAction('pageIn')
      } else if (actionName === 'pageIn') {
        this.doAction('reveal')
      } else if (actionName === 'pageFetch') {
        this.waitTransition('fetch')
      } else if (actionName === 'pageOut') {
        this.waitTransition('out')
      } else if (actionName === 'pageCreate') {
        this.doAction('pageKill')
      } else if (actionName === 'pageKill') {
        this.pageClean()
        this.doAction('pageInit')
      }
    }
  }

  /**
   * Site initialization
   */
  siteInit () {
    this.scrollHandler()

    this.doAction('siteInit')
  }

  /**
   * Remove old page container
   */
  pageClean () {
    var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')
    oldPage.parentNode.removeChild(oldPage)
  }

  /**
   * Wait for site and page to be ready
   * @param {String} element site|page
   */
  waitReady(element) {
    this.wait.ready[element] = false

    // Site loaded and page initiated
    if (!this.wait.ready.site && !this.wait.ready.page) {
      this.doAction('siteIn')
    }
  }

  /**
   * Wait for fetch and page out for transition
   * @param {String} element site|page
   */
  waitTransition(element) {
    this.wait.transition[element] = false

    // Site loaded and page initiated
    if (!this.wait.transition.fetch && !this.wait.transition.out) {
      this.doAction('pageCreate')
    }
  }

  /**
   * Bind events
   */
  bindEvents () {
    window.addEventListener('load', this.waitReady.bind(this, 'site'), { once: true })

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

    emitter.emit('mouseMove', e)
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

    emitter.emit('resize')
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

    if (!window.lg.hasSmoothScroll) {
      emitter.emit('scroll')
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

    emitter.emit('startScroll')
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

    emitter.emit('endScroll')
  }
}
