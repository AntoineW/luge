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
        var callback = this.remove.bind(this, done)

        if (typeof this.intro === 'function') {
          this.intro(callback)
        } else {
          var duration = window.getComputedStyle(this.el).getPropertyValue('transition-duration')

          if (duration !== '' && duration !== '0s') {
            this.el.addEventListener('transitionend', callback, { once: true })
            this.el.classList.add('is-hidden')
          } else {
            callback()
          }
        }
      } else {
        setTimeout(this.siteIn.bind(this, done), remaining * 1000)
      }
    }
  }

  /**
   * Remove preloader
   * @param {Function} done Done callback
   */
  remove (done) {
    this.el.parentNode.removeChild(this.el)
    this.el = null

    done()
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
