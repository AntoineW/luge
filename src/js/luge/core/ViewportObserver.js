import Helpers from 'Core/Helpers'
import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'

class ViewportObserver {
  constructor () {
    this.elements = []

    LifeCycle.add('siteInit', this.init.bind(this), 20)
  }

  /**
   * Init
   */
  init (done) {
    this.createObserver()

    done()
  }

  /**
   * Create observer
   */
  createObserver () {
    this.observer = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      {
        threshold: [Luge.settings.intersection.threshold]
      }
    )
  }

  /**
   * Intersection callback
   * @param {IntersectionObserverEntry[]} entries IntersectionObserverEntry objects
   */
  intersectionCallback (entries) {
    entries.forEach((entry) => {
      const element = entry.target
      let position = 'in'

      if (!entry.isIntersecting) {
        if (entry.boundingClientRect.y <= 0) {
          position = 'above'
        } else {
          position = 'under'
        }
      }

      if (element.luge.viewport.position !== position) {
        element.luge.viewport.position = position

        element.dispatchEvent(new CustomEvent('viewportintersect'))
        element.dispatchEvent(new CustomEvent('viewport' + position))

        if (position === 'in') {
          element.dispatchEvent(new CustomEvent('viewportin'))
        } else {
          element.dispatchEvent(new CustomEvent('viewportout'))
        }
      }
    })
  }

  /**
   * Add element to observe
   * @param {HTMLElement} element Element
   */
  add (element) {
    this.observer.observe(element)

    const properties = {
      viewport: {
        position: 'out'
      }
    }

    if (element.luge || (element.luge = {})) {
      element.luge = Helpers.mergeDeep(element.luge, properties)
    }
  }

  /**
   * Remove observed element
   * @param {HTMLElement} element Element
   */
  remove (element) {
    this.observer.unobserve(element)
  }
}

export default new ViewportObserver()
