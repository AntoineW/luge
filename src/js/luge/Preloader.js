import LifeCycle from 'Luge/LifeCycle'
import Luge from 'Luge/Core'

class PreLoader {
  /**
   * Constructor
   */
  constructor () {
    this.intro = false
    this.startTime = Date.now()

    LifeCycle.add('siteIn', this.siteIn.bind(this))
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  siteIn (done) {
    this.el = document.querySelector('[data-lg-preloader]')

    if (this.el) {
      var elapsed = (Date.now() - this.startTime) / 1000
      var remaining = Luge.settings.preloaderDuration - elapsed

      if (remaining <= 0) {
        if (typeof this.intro === 'function') {
          this.intro(done, this.remove.bind(this))
        } else {
          var clear = this.clear.bind(this, done)
          var duration = window.getComputedStyle(this.el).getPropertyValue('transition-duration')

          if (duration !== '' && duration !== '0s') {
            this.el.addEventListener('transitionend', clear, { once: true })
            this.el.classList.add('is-hidden')
          } else {
            clear()
          }
        }
      } else {
        setTimeout(this.siteIn.bind(this, done), remaining * 1000)
      }
    }
  }

  /**
   * Clear preloader
   * @param {Function} done Done callback
   */
  clear (done) {
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
}

export default new PreLoader()
