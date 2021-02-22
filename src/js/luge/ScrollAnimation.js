import LifeCycle from 'Luge/LifeCycle'
import Emitter from 'Luge/Emitter'
import ScrollObserver from 'Luge/ScrollObserver'

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

    // Presets
    this.presets = {
      parallax: {
        y: ['100%', '-100%']
      }
    }

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
    var elements = document.querySelectorAll('[data-lg-scroll]')
    var self = this

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
    var self = this

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
    var element = e.target
    var properties = null
    var preset = element.getAttribute('data-lg-scroll')
    var progress = element.scrollProgress

    // Yoyo
    if (element.hasAttribute('data-lg-scroll-yoyo')) {
      progress = 1 - Math.abs(1 - progress * 2)
    }

    // Get properties
    if (preset !== '' && this.presets[preset]) {
      properties = this.presets[preset]
    } else if (element.hasAttribute('data-lg-scroll-animate')) {
      properties = JSON.parse(element.getAttribute('data-lg-scroll-animate').replace(/'/g, '"'))
    }

    if (properties) {
      var declarations = {}

      for (var property in properties) {
        if (this.allowedProperties.includes(property) ||
            this.transformProperties.includes(property)) {
          var values = properties[property]

          if (['x', 'y', 'z'].includes(property)) {
            var unit = values[0].match(/\d+([a-z%]+)/m)[1]
            var fromValue = Number(values[0].replace(unit, ''))
            var toValue = Number(values[1].replace(unit, ''))

            var currentValue = fromValue + (toValue - fromValue) * progress

            if (declarations.translate3d || (declarations.translate3d = {})) {
              declarations.translate3d[property] = currentValue + unit
            }
          } else {
            fromValue = Number(String(values[0]).replace(/[a-zA-Z]*/g, ''))
            toValue = Number(String(values[1]).replace(/[a-zA-Z]*/g, ''))

            currentValue = fromValue + (toValue - fromValue) * progress

            declarations[property] = currentValue
          }
        }
      }

      // Handle transform shorthand
      var transform = []
      for (property in declarations) {
        if (this.transformProperties.includes(property)) {
          // Convert object style property value to string
          if (property === 'translate3d') {
            var value = Object.assign({ x: 0, y: 0, z: 0 }, declarations[property])

            declarations[property] = value.x + ', ' + value.y + ', ' + value.z
          }

          // Add deg unit for rotate
          if (property.indexOf('rotate') === 0) {
            declarations[property] += 'deg'
          }

          transform.push(property + '(' + declarations[property] + ')')
        }
      }

      // Create style rule
      var styles = []
      var willChange = []

      if (transform.length > 0) {
        styles.push('transform: ' + transform.join(' '))
        willChange.push('transform')
      }

      for (property in declarations) {
        var propertyValue = declarations[property]

        if (!this.transformProperties.includes(property)) {
          styles.push(property + ': ' + propertyValue)
          willChange.push(property)
        }
      }

      styles.push('will-change: ' + willChange.join(', '))

      styles = styles.join('; ')

      element.setAttribute('style', styles)
    }
  }
}

export default new ScrollAnimation()
