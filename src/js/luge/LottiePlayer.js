import LifeCycle from 'Luge/LifeCycle'
import Emitter from 'Luge/Emitter'
import ScrollObserver from 'Luge/ScrollObserver'

class LottiePlayer {
  /**
   * Constructor
   */
  constructor () {
    this.elements = []

    // Listeners
    this.onViewportIntersect = this.onViewportIntersect.bind(this)
    this.onScrollProgress = this.onScrollProgress.bind(this)

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

      if (LifeCycle.cycles.load.current > 0) {
        this.pageInit(() => {})
      }
    }
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const self = this
    this.elements = document.querySelectorAll('[data-lg-lottie]')
    this.toLoad = 0

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
   * Viewport intersect event handler
   * @param {Event} e Custom event
   */
  onViewportIntersect (e) {
    const element = e.target

    if (element.viewportPosition === 'in') {
      if (element.player.isPaused && element.player.scrollPaused) {
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

  /**
   * Init player
   * @param {HTMLElement} element Container
   */
  initPlayer (element) {
    const self = this

    this.toLoad++

    element.player = lottie.loadAnimation({
      container: element,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: element.getAttribute('data-lg-lottie')
    })

    element.setAttribute('data-lg-lottie-state', 'is-paused')

    // Get options
    const scroll = element.hasAttribute('data-lg-lottie-scroll')
    const loop = element.hasAttribute('data-lg-lottie-loop')
    const loopFrame = Number(element.getAttribute('data-lg-lottie-loop-frame')) ?? 0
    const reverse = element.hasAttribute('data-lg-lottie-reverse')

    if (scroll) {
      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)
    } else {
      element.player.addEventListener('enterFrame', function () {
        if (element.player.totalFrames > 0) {
          const currentFrame = Math.round(element.player.currentFrame)

          if (element.player.playDirection === 1) {
            if (currentFrame === element.player.totalFrames - 1) {
              element.player.pause()

              if (reverse) {
                setTimeout(() => {
                  element.player.setDirection(-1)
                  element.player.goToAndPlay(element.player.totalFrames, true)

                  element.setAttribute('data-lg-lottie-state', 'is-playing is-playing--backward')
                }, 0)
              } else if (loop) {
                setTimeout(() => {
                  element.player.goToAndPlay(loopFrame, true)
                }, 0)
              }
            }
          } else {
            if (currentFrame === loopFrame) {
              element.player.pause()

              if (loop) {
                setTimeout(() => {
                  element.player.setDirection(1)
                  element.player.goToAndPlay(loopFrame, true)

                  element.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward')
                }, 0)
              }
            }
          }
        }
      })
    }

    // Set methods
    element.play = this.play

    // Loaded
    element.player.addEventListener('DOMLoaded', () => {
      self.playerLoaded()

      // Autoplay
      if (element.hasAttribute('data-lg-lottie-autoplay')) {
        element.player.goToAndPlay(0, true)
      }
    }, { once: true })
  }

  /**
   * Player loaded
   */
  playerLoaded () {
    this.toLoad--

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
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target

    element.player.goToAndStop(element.player.totalFrames * element.scrollProgress, true)
  }
}

export default new LottiePlayer()
