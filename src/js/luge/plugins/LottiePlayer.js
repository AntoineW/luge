import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Luge from 'Core/Core'
import ScrollObserver from 'Core/ScrollObserver'

class LottiePlayer {
  /**
   * Constructor
   */
  constructor () {
    this.elements = []

    this.doneLoad = null

    // Listeners
    this.onViewportIntersect = this.onViewportIntersect.bind(this)
    this.onScrollProgress = this.onScrollProgress.bind(this)

    LifeCycle.add('pageLoad', this.pageLoad.bind(this))

    if (document.readyState === 'complete') {
      this.addHooks()
    } else {
      window.addEventListener('load', this.addHooks.bind(this), { once: true })
    }
  }

  /**
   * Add life cycle hooks
   */
  addHooks () {
    if (typeof lottie === 'object') {
      LifeCycle.add('pageInit', this.pageInit.bind(this))
      LifeCycle.add('pageKill', this.pageKill.bind(this))
      LifeCycle.add('reveal', this.reveal.bind(this))

      if (LifeCycle.cycles.load.current > 0) {
        this.pageInit(() => {})
      }
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
        if (!element.player) {
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

    if (!element.lottiePlayer.force) {
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
    const lottiePlayer = {}

    lottiePlayer.path = element.getAttribute('data-lg-lottie')
    lottiePlayer.autoplay = element.hasAttribute('data-lg-lottie-autoplay')
    lottiePlayer.scroll = element.hasAttribute('data-lg-lottie-scroll')
    lottiePlayer.loop = element.hasAttribute('data-lg-lottie-loop')
    lottiePlayer.loopFrame = Number(element.getAttribute('data-lg-lottie-loop-frame')) ?? 0
    lottiePlayer.reverse = element.hasAttribute('data-lg-lottie-reverse')
    lottiePlayer.required = element.hasAttribute('data-lg-lottie-required')
    lottiePlayer.force = element.hasAttribute('data-lg-lottie-force')
    lottiePlayer.renderer = element.getAttribute('data-lg-lottie-renderer') ?? Luge.settings.lottieRenderer
    lottiePlayer.noSubFrame = element.hasAttribute('data-lg-lottie-nosubframe') ?? Luge.settings.lottieNoSubFrame

    element.player = lottie.loadAnimation({
      container: element,
      renderer: lottiePlayer.renderer,
      loop: (lottiePlayer.loop && !lottiePlayer.reverse),
      autoplay: false,
      path: lottiePlayer.path
    })

    if (lottiePlayer.noSubFrame) {
      element.player.setSubframe(false)
    }

    element.classList.add('lg-lottie')
    element.setAttribute('data-lg-lottie-state', 'is-paused')

    if (lottiePlayer.autoplay) {
      this.toAutoplay.push(element)
    }

    if (lottiePlayer.required) {
      this.requireds++
    }

    if (lottiePlayer.scroll) {
      element.addEventListener('scrollprogress', this.onScrollProgress)
    } else {
      if (lottiePlayer.loop && lottiePlayer.reverse) {
        element.player.addEventListener('enterFrame', function () {
          if (element.player.totalFrames > 0) {
            const currentFrame = Math.round(element.player.currentFrame)

            if (element.player.playDirection === 1) {
              if (currentFrame === element.player.totalFrames - 1) {
                element.player.pause()

                if (lottiePlayer.reverse) {
                  setTimeout(() => {
                    element.player.setDirection(-1)
                    element.player.goToAndPlay(element.player.totalFrames, true)

                    element.setAttribute('data-lg-lottie-state', 'is-playing is-playing--backward')
                  }, 0)
                } else if (lottiePlayer.loop) {
                  setTimeout(() => {
                    element.player.goToAndPlay(lottiePlayer.loopFrame, true)
                  }, 0)
                }
              }
            } else {
              if (currentFrame === lottiePlayer.loopFrame) {
                element.player.pause()

                if (lottiePlayer.loop) {
                  setTimeout(() => {
                    element.player.setDirection(1)
                    element.player.goToAndPlay(lottiePlayer.loopFrame, true)

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

      self.playerLoaded(lottiePlayer.required)
    }, { once: true })

    element.lottiePlayer = lottiePlayer
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
