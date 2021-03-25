import LifeCycle from 'Luge/LifeCycle'
import Luge from 'Luge/Core'

class PreLoader {
  /**
   * Constructor
   */
  constructor () {
    this.intro = false
    this.playerIn = false
    this.startTime = Date.now()

    this.preloaderDuration = Luge.settings.preloaderDuration ?? 0

    LifeCycle.add('siteInit', this.siteInit.bind(this))
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  siteInit (done) {
    this.el = document.querySelector('[data-lg-preloader]')

    if (this.el) {
      this.el.classList.add('lg-preloader', 'lg-preloader--' + this.el.getAttribute('data-lg-preloader'))

      if (this.el.hasAttribute('data-lg-preloader-duration')) {
        this.preloaderDuration = this.el.getAttribute('data-lg-preloader-duration')
      }

      this.initLottie()

      LifeCycle.add('siteIn', this.siteIn.bind(this))
    }

    done()
  }

  /**
   * Intro animation
   * @param {Function} done Done function
   */
  siteIn (done) {
    const elapsed = (Date.now() - this.startTime) / 1000
    const remaining = this.preloaderDuration - elapsed

    if (remaining <= 0) {
      const clear = this.clear.bind(this, done)

      if (this.playerIn) {
        this.playerIn.play()

        this.playerIn.addEventListener('complete', clear, { once: true })
      } else {
        if (typeof this.intro === 'function') {
          this.intro(done, this.remove.bind(this))
        } else {
          const duration = window.getComputedStyle(this.el).getPropertyValue('transition-duration')

          if (duration !== '' && duration !== '0s') {
            this.el.addEventListener('transitionend', clear, { once: true })
            this.el.classList.add('is-hidden')
          } else {
            clear()
          }
        }
      }
    } else {
      setTimeout(this.siteIn.bind(this, done), remaining * 1000)
    }
  }

  /**
   * Clear preloader
   * @param {Function} done Done callback
   */
  clear (done) {
    if (this.playerIn) {
      this.playerIn.destroy()
    }

    this.remove()

    done()
  }

  /**
   * Remove preloader from done
   */
  remove (done) {
    this.el.parentNode.removeChild(this.el)
    this.el = null
  }

  /**
   * Add intro animation
   * @param {Function} callback Callback function
   */
  add (callback) {
    this.intro = callback
  }

  /**
   * Init lottie
   */
  initLottie () {
    const self = this

    if (this.el.getAttribute('data-lg-preloader') === 'lottie' && typeof lottie === 'object') {
      const animIn = this.el.getAttribute('data-lg-preloader-in')
      let playerIn = false

      if (animIn) {
        playerIn = lottie.loadAnimation({
          container: this.el,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: animIn,
          rendererSettings: {
            preserveAspectRatio: 'none'
          }
        })

        if (this.el.hasAttribute('data-lg-preloader-reverse')) {
          playerIn.setDirection(-1)
        }
      }

      playerIn.addEventListener('DOMLoaded', () => {
        if (self.el.hasAttribute('data-lg-preloader-reverse')) {
          playerIn.goToAndStop(playerIn.totalFrames - 1, true)
        }

        self.el.setAttribute('style', '')
      }, { once: true })

      this.playerIn = playerIn
    }
  }
}

export default new PreLoader()
