import LifeCycle from 'Core/LifeCycle'
import Plugin from 'Core/Plugin'
import ScrollObserver from 'Core/ScrollObserver'

class Parallax extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super()

    // Plugin properties
    this.pluginSlug = 'parallax'
    this.pluginAttributes = {
      root: String,
      disable: String,
      amplitude: [String, 1],
      anchor: String
    }

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
   * Get attributes
   */
  getAttributes (element) {
    const data = super.getAttributes(element)

    if (data.amplitude) {
      const randAmplitude = data.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

      if (randAmplitude) {
        data.amplitude = Number(randAmplitude[1]) + ((Number(randAmplitude[2]) - Number(randAmplitude[1])) * Math.random())
      } else {
        data.amplitude = Number(data.amplitude)
      }
    }

    return data
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    document.querySelectorAll('[data-lg-parallax]').forEach(element => {
      const attributes = this.getAttributes(element)

      const disable = attributes.disable
      let enable = true

      if (disable) {
        if ((disable === 'desktop' && window.browser.is('desktop')) ||
            (disable === 'mobile' && !window.browser.is('desktop')) ||
            (disable === 'phone' && window.browser.is('mobile')) ||
            (disable === 'tablet' && window.browser.is('tablet'))) {
          enable = false
        }
      }

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

      if (element.luge.parallax.root === 'media') {
        element.style.overflow = 'hidden'
      }

      this.elements.push(element)

      this.moveElement(element)
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
    this.moveElement(e.target)
  }

  moveElement (element) {
    let progress = 1 - element.scrollProgress * 2

    if (element.luge.parallax.anchor === 'bottom') {
      progress += 1
    } else if (element.luge.parallax.anchor === 'top') {
      progress -= 1
    }

    if (element.luge.parallax.root === 'media') {
      const movement = (element.luge.parallax.amplitude * 5) * progress

      element.querySelector('img, svg, video').style.transform = 'translate3d(0, ' + movement + '%, 0) scale(1.' + (String(Math.abs(element.luge.parallax.amplitude)).replace('.', '')) + ')'
    } else {
      const movement = element.clientHeight * progress * element.luge.parallax.amplitude / 2

      element.style.transform = 'translate3d(0, ' + movement + 'px, 0)'
    }
  }
}

export default new Parallax()
