import LifeCycle from 'Luge/LifeCycle'
import Emitter from 'Luge/Emitter'
import ScrollObserver from 'Luge/ScrollObserver'

class Parallax {
  /**
   * Constructor
   */
  constructor () {
    // Disable parallax on light browsers
    if (window.browser.light) {
      return
    }

    this.elements = []

    // Listeners
    this.onScrollProgress = this.onScrollProgress.bind(this)

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    document.querySelectorAll('[data-lg-parallax]').forEach(element => {
      const disable = element.getAttribute('data-lg-parallax-disable')
      let enable = true

      if (disable) {
        if ((disable === 'mobile' && !window.browser.is('desktop')) ||
            (disable === 'phone' && window.browser.is('mobile')) ||
            (disable === 'tablet' && window.browser.is('tablet'))) {
          enable = false
        }
      }

      element.parallax = enable

      if (enable) {
        this.addElement(element)
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

    this.elements.forEach(element => {
      self.removeElement(element)
    })

    done()
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)

      // Get parallax options
      element.parallaxAmplitude = element.getAttribute('data-lg-parallax-amplitude') ? element.getAttribute('data-lg-parallax-amplitude') : 1

      if (typeof element.parallaxAmplitude === 'string') {
        const randAmplitude = element.parallaxAmplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

        if (randAmplitude) {
          element.parallaxAmplitude = Number(randAmplitude[1]) + ((Number(randAmplitude[2]) - Number(randAmplitude[1])) * Math.random())
        } else {
          element.parallaxAmplitude = Number(element.parallaxAmplitude)
        }
      }

      element.parallaxAnchor = element.getAttribute('data-lg-parallax-anchor')

      if (element.getAttribute('data-lg-parallax') === 'media') {
        element.style.overflow = 'hidden'
      }

      this.elements.push(element)
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element) {
    element.removeEventListener('scrollprogress', this.onScrollProgress)

    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
    }
  }

  /**
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target

    let progress = 1 - element.scrollProgress * 2

    if (element.parallaxAnchor === 'bottom') {
      progress += 1
    } else if (element.parallaxAnchor === 'top') {
      progress -= 1
    }

    if (element.getAttribute('data-lg-parallax') === 'media') {
      const movement = (element.parallaxAmplitude * 5) * progress

      element.querySelector('img, svg, video').style.transform = 'translate3d(0, ' + movement + '%, 0) scale(1.' + (String(Math.abs(element.parallaxAmplitude)).replace('.', '')) + ')'
    } else {
      const movement = element.clientHeight * progress * element.parallaxAmplitude / 2

      element.style.transform = 'translate3d(0, ' + movement + 'px, 0)'
    }
  }
}

export default new Parallax()
