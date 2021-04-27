import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import ScrollObserver from 'Core/ScrollObserver'

class LottiePlayer extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super()

    // Plugin properties
    this.pluginSlug = 'lottie'

    this.elements = []

    this.doneLoad = null

    // Listeners
    this.onViewportIntersect = this.onViewportIntersect.bind(this)
    this.onScrollProgress = this.onScrollProgress.bind(this)

    if (typeof lottie === 'object') {
      LifeCycle.add('pageInit', this.pageInit.bind(this))
      LifeCycle.add('pageLoad', this.pageLoad.bind(this))
      LifeCycle.add('pageKill', this.pageKill.bind(this))
      LifeCycle.add('reveal', this.reveal.bind(this))
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
      renderer: [String, Luge.settings.lottieRenderer],
      nosubframe: [Boolean, Luge.settings.lottieNoSubFrame]
    }
  }

  /**
   * Page load
   * @param {Function} done Done function
   */
  pageLoad (done) {
    let waitLoad = false

    if (this.elements.length > 0) {
      this.elements.forEach(element => {
        if (element.luge.lottie.required) {
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
    const self = this
    this.elements = document.querySelectorAll('[data-lg-lottie]')
    this.toAutoplay = []
    this.toLoad = 0
    this.requireds = 0

    this.elements.forEach(element => {
      if (!element.player) {
        ScrollObserver.add(element)

        self.initPlayer(element)

        element.addEventListener('revealin', self.play)
        element.addEventListener('viewportintersect', self.onViewportIntersect)
      }
    })

    done()
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    const self = this
    const oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')

    oldPage.querySelectorAll('[data-lg-lottie]').forEach(element => {
      element.removeEventListener('revealin', self.play)
      element.removeEventListener('viewportintersect', self.onViewportIntersect)

      if (element.hasAttribute('data-lg-lottie-scroll')) {
        element.removeEventListener('scrollprogress', self.onScrollProgress)
      }

      if (element.player) {
        element.player.destroy()
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

    if (!element.luge.lottie.force) {
      if (element.viewportPosition === 'in') {
        if (element.player.isPaused && (element.player.scrollPaused || element.hasAttribute('data-lg-lottie-autoplay'))) {
          element.player.scrollPaused = false
          element.player.play()
        }
      } else {
        if (!element.player.isPaused) {
          element.player.scrollPaused = true
          element.player.pause()
        }
      }
    }
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

    if (attributes.noSubFrame) {
      element.player.setSubframe(false)
    }

    element.classList.add('lg-lottie')
    element.setAttribute('data-lg-lottie-state', 'is-paused')

    if (attributes.autoplay) {
      this.toAutoplay.push(element)
    }

    if (attributes.required) {
      this.requireds++
    }

    if (attributes.scroll) {
      element.addEventListener('scrollprogress', this.onScrollProgress)
    } else {
      if (attributes.loop && attributes.reverse) {
        element.player.addEventListener('enterFrame', function () {
          if (element.player.totalFrames > 0) {
            const currentFrame = Math.round(element.player.currentFrame)

            if (element.player.playDirection === 1) {
              if (currentFrame === element.player.totalFrames - 1) {
                element.player.pause()

                if (attributes.reverse) {
                  setTimeout(() => {
                    element.player.setDirection(-1)
                    element.player.goToAndPlay(element.player.totalFrames, true)

                    element.setAttribute('data-lg-lottie-state', 'is-playing is-playing--backward')
                  }, 0)
                } else if (attributes.loop) {
                  setTimeout(() => {
                    element.player.goToAndPlay(attributes.loopFrame, true)
                  }, 0)
                }
              }
            } else {
              if (currentFrame === attributes.loopFrame) {
                element.player.pause()

                if (attributes.loop) {
                  setTimeout(() => {
                    element.player.setDirection(1)
                    element.player.goToAndPlay(attributes.loopFrame, true)

                    element.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward')
                  }, 0)
                }
              }
            }
          }
        })
      }
    }

    // Set methods
    element.play = this.play
    element.pause = this.pause

    // Loaded
    element.player.addEventListener('DOMLoaded', () => {
      element.classList.add('is-loaded')

      self.playerLoaded(attributes.required)
    }, { once: true })
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
      Emitter.emit('resize')
    }
  }

  /**
   * Play
   */
  play () {
    this.player.goToAndPlay(0, true)

    this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward')
  }

  /**
   * Pause
   */
  pause () {
    this.player.pause()

    this.setAttribute('data-lg-lottie-state', 'is-paused')
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

export default new LottiePlayer()
