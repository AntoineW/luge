import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'
import Emitter from 'Core/Emitter'
import Plugin from 'Core/Plugin'
import ScrollObserver from 'Core/ScrollObserver'
import Ticker from 'Core/Ticker'

class ScrollAnimation extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('scroll')

    if (this.isDisabled) {
      return
    }

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

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      yoyo: Boolean,
      inertia: [String, Luge.settings.scroll.inertia],
      animate: String
    }
  }

  /**
   * Get attributes
   */
  getAttributes (element) {
    const data = super.getAttributes(element)

    if (data.inertia) {
      const randInertia = data.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

      if (randInertia) {
        data.inertia = Number(randInertia[1]) + ((Number(randInertia[2]) - Number(randInertia[1])) * Math.random())
      } else {
        data.inertia = Number(data.inertia)
      }

      data.inertia = Math.max(Math.min(data.inertia, 0.99), 0)
    }

    return data
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('update', this.updateHandler, this)
  }

  /**
   * Update handler
   */
  updateHandler () {
    this.addElements()
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    this.addElements()

    done()
  }

  /**
   * Add elements
   */
  addElements () {
    const elements = document.querySelectorAll('[data-lg-scroll]')
    const self = this

    elements.forEach(element => {
      self.addElement(element)
    })
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      const attributes = this.getAttributes(element)

      ScrollObserver.add(element)

      element.addEventListener('scrollprogress', this.onScrollProgress)

      // Set values
      const scrollAnimation = {}

      // Smooth progress
      scrollAnimation.smoothProgress = (element.scrollProgress !== undefined ? element.scrollProgress : 0)

      // Yoyo
      scrollAnimation.yoyo = attributes.yoyo

      // Inertia
      scrollAnimation.inertia = attributes.inertia

      // Get properties
      let properties = false

      if (attributes.animate !== undefined) {
        properties = JSON.parse(attributes.animate.replace(/'/g, '"'))
      } else if (this.presets[attributes.root]) {
        properties = this.presets[attributes.root]
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

      element.luge.scroll.animation = scrollAnimation

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

    element.luge.scroll.animation.atDest = false
  }

  /**
   * Raf animation
   */
  tick () {
    for (const element of this.elements) {
      // Early break if at dest
      if (element.luge.scroll.animation.atDest) {
        continue
      }

      // Yoyo
      let progress = element.scrollProgress
      if (element.luge.scroll.yoyo) {
        progress = 1 - Math.abs(1 - progress * 2)
      }

      element.luge.scroll.animation.smoothProgress += (progress - element.luge.scroll.animation.smoothProgress) * (1 - element.luge.scroll.inertia)

      if (element.luge.scroll.animation.properties) {
        const declarations = {}

        for (const [key, property] of Object.entries(element.luge.scroll.animation.properties)) {
          property.current = property.from + (property.to - property.from) * element.luge.scroll.animation.smoothProgress

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
        const diff = Math.round((element.scrollProgress - element.luge.scroll.animation.smoothProgress) * 1000) / 1000

        element.style.setProperty('--progress', element.luge.scroll.animation.smoothProgress)
        element.style.setProperty('--abs-diff', Math.abs(diff))
        element.style.setProperty('--diff', diff)
      }

      // Block future style update if element is at destination
      if (Math.abs(progress - element.luge.scroll.animation.smoothProgress) < 0.0001) {
        element.luge.scroll.animation.atDest = true
      }
    }
  }
}

export default new ScrollAnimation()
