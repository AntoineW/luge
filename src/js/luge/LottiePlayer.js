import Actions from 'Luge/Actions'

class LottiePlayer {
  /**
   * Constructor
   */
  constructor () {
    if (typeof lottie === 'object') {
      Actions.add('pageInit', this.pageInit.bind(this))
      Actions.add('pageKill', this.pageKill.bind(this))
    }
  }

  /**
   * Init
   */
  pageInit (done) {
    var self = this

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

    // Autoplay
    if (element.hasAttribute('data-lg-lottie-autoplay')) {
      element.player.addEventListener('DOMLoaded', () => {
        element.player.goToAndPlay(0, true)
      }, { once: true })
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
