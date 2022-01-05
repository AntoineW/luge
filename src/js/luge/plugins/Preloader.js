import LifeCycle from 'Core/LifeCycle'
import Plugin from 'Core/Plugin'
import Luge from 'Core/Core'

class PreLoader extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('preloader')
  }

  /**
   * Init
   */
  init () {
    super.init()

    this.intro = false
    this.playerIn = false
    this.startTime = Date.now()
    this.doneLoad = null

    this.el = document.querySelector('[data-lg-preloader]')

    if (this.el) {
      this.attributes = this.getAttributes(this.el)

      this.el.classList.add('lg-preloader', 'lg-preloader--' + this.attributes.root)

      this.initLottie()

      LifeCycle.add('siteIn', this.siteIn.bind(this))
    }

    LifeCycle.add('pageLoad', this.pageLoad.bind(this))
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: [String, ''],
      duration: [Number, Luge.settings.preloader.duration],
      in: String,
      reverse: Boolean
    }
  }

  /**
   * Page load
   * @param {Function} done Done function
   */
  pageLoad (done) {
    if (this.attributes && this.attributes.root === 'lottie' && typeof lottie === 'object') {
      this.doneLoad = done
    } else {
      done()
    }
  }

  /**
   * Intro animation
   * @param {Function} done Done function
   */
  siteIn (done) {
    const elapsed = (Date.now() - this.startTime) / 1000
    const remaining = this.attributes.duration - elapsed

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

    if (this.attributes.root === 'lottie' && typeof lottie === 'object') {
      const animIn = this.attributes.in
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

        if (this.attributes.reverse) {
          playerIn.setDirection(-1)
        }
      }

      playerIn.addEventListener('DOMLoaded', () => {
        if (self.attributes.reverse) {
          playerIn.goToAndStop(playerIn.totalFrames - 1, true)
        }

        self.el.setAttribute('style', '')

        if (typeof self.doneLoad === 'function') {
          self.doneLoad()
          self.doneLoad = null
        }
      }, { once: true })

      this.playerIn = playerIn
    }
  }
}

export default new PreLoader()
