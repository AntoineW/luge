import Actions from 'Luge/Actions'
import Emitter from 'Luge/Emitter'

class LottiePlayer {
  /**
   * Constructor
   */
  constructor () {
    if (document.readyState === 'complete') {
      this.addActions()
    } else {
      window.addEventListener('load', this.addActions.bind(this), { once: true })
    }
  }

  /**
   * Add actions
   */
  addActions () {
    if (typeof lottie === 'object') {
      Actions.add('pageInit', this.pageInit.bind(this))
      Actions.add('pageKill', this.pageKill.bind(this))

      if (Actions.flows.load.current > 0) {
        this.pageInit(() => {})
      }
    }
  }

  /**
   * Init
   */
  pageInit (done) {
    var self = this
    this.toLoad = 0

    document.querySelectorAll('[data-lg-lottie]').forEach(element => {
      if (!element.player) {
        self.initPlayer(element)

        element.addEventListener('revealIn', self.play)
      }
    })

    done()
  }

  /**
   * Kill
   */
  pageKill (done) {
    var self = this
    var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')

    oldPage.querySelectorAll('[data-lg-lottie]').forEach(element => {
      element.removeEventListener('revealIn', self.play)

      if (element.player) {
        element.player.destroy()
      }
    })

    done()
  }

  /**
   * Init player
   */
  initPlayer (element) {
    var self = this

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
    var loop = element.hasAttribute('data-lg-lottie-loop')
    var loopFrame = Number(element.getAttribute('data-lg-lottie-loop-frame'))
    var reverse = element.hasAttribute('data-lg-lottie-reverse')

    element.player.addEventListener('enterFrame', function () {
      if (element.player.totalFrames > 0) {
        var currentFrame = Math.round(element.player.currentFrame)

        if (element.player.playDirection === 1) {
          if (currentFrame === element.player.totalFrames - 1) {
            element.player.pause()

            if (reverse) {
              setTimeout(() => {
                element.player.setDirection(-1)
                element.player.goToAndPlay(element.player.totalFrames, true)

                this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--backward')
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

                this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward')
              }, 0)
            }
          }
        }
      }
    })

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
}

export default new LottiePlayer()
