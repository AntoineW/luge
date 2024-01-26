import Plugin from '../core/Plugin'

export default class LottiePlayer extends Plugin {
  /**
   * Constructor
   */
  constructor (luge) {
    super('lottie')

    this.luge = luge

    this.elements = []

    this.doneLoad = null

    // Listeners
    this.onViewportIntersect = this.onViewportIntersect.bind(this)
    this.onScrollProgress = this.onScrollProgress.bind(this)

    luge.lottie = {
      deferInit: this.deferInit.bind(this)
    }
  }

  /**
   * Init
   */
  init () {
    super.init()

    if (typeof lottie === 'object') {
      this.luge.lifecycle.add('pageInit', this.pageInit.bind(this))
      this.luge.lifecycle.add('pageLoad', this.pageLoad.bind(this))
      this.luge.lifecycle.add('pageKill', this.pageKill.bind(this))
      this.luge.lifecycle.add('reveal', this.reveal.bind(this))
    }

    this.bindEvents()
  }

  /**
   * Defer init
   */
  deferInit () {
    if (typeof lottie === 'object') {
      this.pageInit(() => {})
      LifeCycle.add('pageKill', this.pageKill.bind(this))
      LifeCycle.add('reveal', this.reveal.bind(this))

      ScrollObserver.updateHandler()
    }
  }

  /**
   * Set plugin attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      autoplay: Boolean,
      scroll: Boolean,
      loop: Boolean,
      loopFrame: [Number, 0],
      reverse: Boolean,
      required: Boolean,
      force: Boolean,
      lazy: Boolean,
      renderer: [String, this.luge._settings.lottie.renderer],
      subframe: [Boolean, this.luge._settings.lottie.subFrame]
    }
  }

  /**
   * Bind events
   */
  bindEvents () {
    this.luge.emitter.on('update', this.updateHandler, this)
  }

  /**
   * Update handler
   */
  updateHandler () {
    this.addElements()
    this.reveal(() => {})
  }

  /**
   * Page load
   * @param {Function} done Done function
   */
  pageLoad (done) {
    let waitLoad = false

    if (this.elements.length > 0) {
      this.elements.forEach(element => {
        if (element.luge.lottie.required && !element.player.isLoaded) {
          waitLoad = true
        }
      })
    }

    if (waitLoad) {
      this.doneLoad = done
    } else {
      done()
    }
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    this.addElements()

    done()
  }

  /**
   * Add elements
   */
  addElements () {
    const self = this
    this.elements = document.querySelectorAll('[data-lg-lottie]')
    this.toAutoplay = []
    this.toLoad = 0
    this.requireds = 0

    this.elements.forEach(element => {
      if (!element.player) {
        const attributes = this.getAttributes(element)

        this.luge.scrollobserver.add(element)

        if (attributes.lazy) {
          element.addEventListener('viewportintersect', self.onViewportIntersect)
        } else {
          self.initPlayer(element)

          element.addEventListener('revealin', self.play)
          element.addEventListener('viewportintersect', self.onViewportIntersect)
        }
      }
    })
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    const self = this
    let elements = []

    const oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')

    if (oldPage) {
      elements = oldPage.querySelectorAll('[data-lg-lottie]')
    } else {
      elements = this.elements
    }

    elements.forEach(element => {
      element.removeEventListener('revealin', self.play)
      element.removeEventListener('viewportintersect', self.onViewportIntersect)

      if (element.hasAttribute('data-lg-lottie-scroll')) {
        element.removeEventListener('scrollprogress', self.onScrollProgress)
      }

      if (element.player) {
        element.player.destroy()
        delete element.player
      }
    })

    done()
  }

  /**
   * Reveal
   * @param {Function} done Done function
   */
  reveal (done) {
    this.toAutoplay.forEach(element => {
      if (element.viewportPosition === 'in') {
        element.play()
      }
    })

    done()
  }

  /**
   * Viewport intersect event handler
   * @param {Event} e Custom event
   */
  onViewportIntersect (e) {
    const element = e.target

    if (!element.player) {
      if (element.viewportPosition === 'in') {
        this.initLazy(element)
      }
    } else {
      if (!element.luge.lottie.force) {
        if (element.viewportPosition === 'in') {
          if (element.player.isPaused && (element.player.scrollPaused || element.hasAttribute('data-lg-lottie-autoplay'))) {
            element.player.scrollPaused = false
            element.play()
          }
        } else {
          if (!element.player.isPaused) {
            element.player.scrollPaused = true
            element.pause()
          }
        }
      }
    }
  }

  /**
   * Lazy init
   * @param {HTMLElement} element Container
   */
  initLazy (element) {
    this.initPlayer(element)

    element.player.addEventListener('DOMLoaded', () => {
      element.play()
    }, { once: true })
  }

  /**
   * Init player
   * @param {HTMLElement} element Container
   */
  initPlayer (element) {
    const self = this

    this.toLoad++

    // Get options
    const attributes = this.getAttributes(element)

    element.player = lottie.loadAnimation({
      container: element,
      renderer: attributes.renderer,
      loop: (attributes.loop && !attributes.reverse),
      autoplay: false,
      path: attributes.root
    })

    if (typeof attributes.subframe !== 'undefined') {
      element.player.setSubframe(attributes.subframe)
    }

    element.classList.add('lg-lottie')
    this.setPlayerStateClasses(element, false)

    if (attributes.autoplay) {
      this.toAutoplay.push(element)
    }

    if (attributes.required) {
      this.requireds++
    }

    if (attributes.scroll) {
      element.addEventListener('scrollprogress', this.onScrollProgress)
    } else if (attributes.loop) {
      element.player.addEventListener('enterFrame', function () {
        if (element.player.totalFrames > 0) {
          const currentFrame = Math.round(element.player.currentFrame)

          if (element.player.playDirection === 1) {
            if (currentFrame === element.player.totalFrames - 1) {
              element.player.pause()

              if (attributes.reverse) {
                this.luge.ticker.nextTick(() => {
                  element.player.setDirection(-1)
                  element.player.goToAndPlay(element.player.totalFrames, true)

                  self.setPlayerStateClasses(element, 'backward')
                }, this)
              } else {
                this.luge.ticker.nextTick(() => {
                  element.player.goToAndPlay(attributes.loopFrame, true)
                }, this)
              }
            }
          } else {
            if (currentFrame === attributes.loopFrame) {
              element.player.pause()

              this.luge.ticker.nextTick(() => {
                element.player.setDirection(1)
                element.player.goToAndPlay(attributes.loopFrame, true)

                self.setPlayerStateClasses(element, 'forward')
              }, this)
            }
          }
        }
      })
    }

    // Set methods
    element.play = this.play.bind(this, element)
    element.pause = this.pause.bind(this, element)
    element.stop = this.stop.bind(this, element)

    // Loaded
    element.player.addEventListener('DOMLoaded', () => {
      element.classList.add('is-loaded')

      self.playerLoaded(attributes.required)
    }, { once: true })
  }

  /**
   * Set player state classes
   * @param {HTMLElement} el Element
   * @param {Boolean|String} playing If playing, playing direction
   */
  setPlayerStateClasses (el, playing) {
    el.classList.remove('is-playing', 'is-playing-forward', 'is-playing-backward', 'is-paused')

    if (!playing) {
      el.classList.add('is-paused')
    } else {
      el.classList.add('is-playing')

      if (playing === 'backward') {
        el.classList.add('is-playing-backward')
      } else {
        el.classList.add('is-playing-forward')
      }
    }
  }

  /**
   * Player loaded
   */
  playerLoaded (required = false) {
    this.toLoad--

    if (required) {
      this.requireds--
    }

    // Call doneLoad when required animations have been loaded
    if (this.requireds === 0 && typeof this.doneLoad === 'function') {
      this.doneLoad()
      this.doneLoad = null
    }

    // Emit resize event when all animations are loaded
    if (this.toLoad === 0) {
      this.luge.ticker.nextTick(() => {
        this.luge.emitter.emit('resize')
      })
    }
  }

  /**
   * Play
   */
  play (element) {
    if (element && element.player) {
      element.player.play()

      this.setPlayerStateClasses(element, 'forward')
    }
  }

  /**
   * Pause
   */
  pause (element) {
    if (element && element.player) {
      element.player.pause()

      this.setPlayerStateClasses(element, false)
    }
  }

  /**
   * Stop
   */
  stop (element) {
    if (element && element.player) {
      element.player.stop()

      this.setPlayerStateClasses(element, false)
    }
  }

  /**
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target

    element.player.goToAndStop(element.player.totalFrames * element.scrollProgress, true)
  }
}
