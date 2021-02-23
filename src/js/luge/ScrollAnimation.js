import LifeCycle from 'Luge/LifeCycle'
import Luge from 'Luge/Core'
import ScrollObserver from 'Luge/ScrollObserver'
import Ticker from 'Luge/Ticker'

class ScrollAnimation {
  /**
   * Constructor
   */
  constructor () {
    this.elements = []

    // Properties
    this.allowedProperties = [
      'opacity'
    ]

    this.transformProperties = [
      'x',
      'y',
      'z',
      'translate3d',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scaleX',
      'scaleY',
      'scaleZ'
    ]

    // Listeners
    this.onScrollProgress = this.onScrollProgress.bind(this)

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    Ticker.add(this.tick, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const elements = document.querySelectorAll('[data-lg-scroll]')
    const self = this

    elements.forEach(element => {
      self.addElement(element)
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

      // Set values
      const scrollAnimation = {}

      // Yoyo
      scrollAnimation.yoyo = element.hasAttribute('data-lg-scroll-yoyo')

      // Inertia
      scrollAnimation.inertia = element.hasAttribute('data-lg-scroll-inertia') ? element.getAttribute('data-lg-scroll-inertia') : Luge.settings.scrollInertia

      // Get properties
      if (element.hasAttribute('data-lg-scroll-animate')) {
        const properties = JSON.parse(element.getAttribute('data-lg-scroll-animate').replace(/'/g, '"'))

        const declarations = {}

        for (const property in properties) {
          if (this.allowedProperties.includes(property) ||
              this.transformProperties.includes(property)) {
            const values = properties[property]
            let fromValue = String(values[0])
            let toValue = String(values[1])

            let unit = fromValue.match(/\d+([a-zA-Z%]+)/m)
            if (unit) {
              unit = unit[1]
            } else if (property.indexOf('rotate') === 0) {
              unit = 'deg'
            }

            fromValue = Number(fromValue.replace(unit, ''))
            toValue = Number(toValue.replace(unit, ''))

            declarations[property] = {
              from: fromValue,
              to: toValue,
              current: fromValue,
              unit: unit
            }
          }
        }

        scrollAnimation.properties = declarations
      } else {
        scrollAnimation.properties = {}
      }

      element.scrollAnimation = scrollAnimation

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
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    const element = e.target
    let progress = element.scrollProgress

    // Yoyo
    if (element.scrollAnimation.yoyo) {
      progress = 1 - Math.abs(1 - progress * 2)
    }

    // Get dest value
    for (const [key, property] of Object.entries(element.scrollAnimation.properties)) {
      property.dest = property.from + (property.to - property.from) * progress
      element.scrollAnimation.atDest = false
    }
  }

  /**
   * Raf animation
   */
  tick () {
    for (const element of this.elements) {
      // Early break if at dest
      if (element.scrollAnimation.atDest) {
        continue
      }

      const declarations = {}
      let atDest = true

      for (const [key, property] of Object.entries(element.scrollAnimation.properties)) {
        property.current += (property.dest - property.current) * element.scrollAnimation.inertia

        if (Math.abs(property.dest - property.current) > 0.01) {
          atDest = false
        }

        if (['x', 'y', 'z'].includes(key)) {
          if (declarations.translate3d || (declarations.translate3d = {})) {
            declarations.translate3d[key] = property.current + property.unit
          }
        } else {
          declarations[key] = property.current + property.unit
        }
      }

      // Handle transform shorthand
      const transform = []
      for (const [key, property] of Object.entries(declarations)) {
        if (this.transformProperties.includes(key)) {
          // Convert object style property value to string
          if (typeof property === 'object') {
            if (key === 'translate3d') {
              const value = Object.assign({ x: 0, y: 0, z: 0 }, property)

              property.string = value.x + ', ' + value.y + ', ' + value.z
            } else {
              property.string = Object.values(property).join(', ')
            }
          }

          transform.push(key + '(' + (typeof property === 'string' ? property : property.string) + ')')
        }
      }

      // Create style rule
      const styles = []
      const willChange = []

      if (transform.length > 0) {
        styles.push('transform: ' + transform.join(' '))
        willChange.push('transform')
      }

      for (const [key, property] of Object.entries(declarations)) {
        if (!this.transformProperties.includes(key)) {
          styles.push(key + ': ' + property)
          willChange.push(key)
        }
      }

      styles.push('will-change: ' + willChange.join(', '))

      element.setAttribute('style', styles.join('; '))

      // Block future style update if element is at destination
      if (atDest) {
        element.scrollAnimation.atDest = true
        continue
      }
    }
  }
}

export default new ScrollAnimation()
