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
      'opacity',
      'background-x',
      'background-y'
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

    // Presets
    this.presets = {
      'background-x': {
        'background-x': ['0%', '100%']
      },
      'background-y': {
        'background-y': ['0%', '100%']
      }
    }

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

      // Smooth progress
      scrollAnimation.smoothProgress = (element.scrollProgress !== undefined ? element.scrollProgress : 0)

      // Yoyo
      scrollAnimation.yoyo = element.hasAttribute('data-lg-scroll-yoyo')

      // Inertia
      scrollAnimation.inertia = element.hasAttribute('data-lg-scroll-inertia') ? element.getAttribute('data-lg-scroll-inertia') : Luge.settings.scrollInertia

      if (typeof scrollAnimation.inertia === 'string') {
        const randInertia = scrollAnimation.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

        if (randInertia) {
          scrollAnimation.inertia = Number(randInertia[1]) + ((Number(randInertia[2]) - Number(randInertia[1])) * Math.random())
        } else {
          scrollAnimation.inertia = Number(scrollAnimation.inertia)
        }
      }

      // Get properties
      let properties = false

      if (element.hasAttribute('data-lg-scroll-animate')) {
        properties = JSON.parse(element.getAttribute('data-lg-scroll-animate').replace(/'/g, '"'))
      } else if (this.presets[element.getAttribute('data-lg-scroll')]) {
        properties = this.presets[element.getAttribute('data-lg-scroll')]
      }

      if (properties) {
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

            let safeProperty = property
            if (property === 'background-x') {
              safeProperty = 'background-position-x'
            } else if (property === 'background-y') {
              safeProperty = 'background-position-y'
            }

            declarations[safeProperty] = {
              from: fromValue,
              to: toValue,
              current: fromValue,
              unit: unit
            }
          }
        }

        scrollAnimation.properties = declarations
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

    element.scrollAnimation.atDest = false
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

      // Yoyo
      let progress = element.scrollProgress
      if (element.scrollAnimation.yoyo) {
        progress = 1 - Math.abs(1 - progress * 2)
      }

      element.scrollAnimation.smoothProgress += (progress - element.scrollAnimation.smoothProgress) * element.scrollAnimation.inertia

      if (element.scrollAnimation.properties) {
        const declarations = {}

        for (const [key, property] of Object.entries(element.scrollAnimation.properties)) {
          property.current = property.from + (property.to - property.from) * element.scrollAnimation.smoothProgress

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

            transform.push(key + '(' + (typeof property !== 'object' ? property : property.string) + ')')
          }
        }

        // Create style rule
        const styles = {}
        const willChange = []

        if (transform.length > 0) {
          styles.transform = transform.join(' ')
          willChange.push('transform')
        }

        for (const [key, property] of Object.entries(declarations)) {
          if (!this.transformProperties.includes(key)) {
            styles[key] = property
            willChange.push(key)
          }
        }

        for (const [key, property] of Object.entries(styles)) {
          element.style.setProperty(key, property)
        }

        element.style.setProperty('will-change', willChange.join(', '))
      } else {
        const diff = Math.round((element.scrollProgress - element.scrollAnimation.smoothProgress) * 1000) / 1000

        element.style.setProperty('--progress', element.scrollAnimation.smoothProgress)
        element.style.setProperty('--abs-diff', Math.abs(diff))
        element.style.setProperty('--diff', diff)
      }

      // Block future style update if element is at destination
      if (Math.abs(progress - element.scrollAnimation.smoothProgress) < 0.0001) {
        element.scrollAnimation.atDest = true
      }
    }
  }
}

export default new ScrollAnimation()
