import Plugin from '../core/Plugin'

export default class Parallax extends Plugin {
  /**
   * Constructor
   */
  constructor (luge) {
    super('parallax')

    this.luge = luge

    this.elements = []

    // Listeners
    this.onScrollProgress = this.onScrollProgress.bind(this)
  }

  /**
   * Init
   */
  init () {
    super.init()

    this.luge.lifecycle.add('pageInit', this.pageInit.bind(this), 30)
    this.luge.lifecycle.add('pageKill', this.pageKill.bind(this))

    this.luge.ticker.add(this.tick, this)

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      disable: String,
      amplitude: [String, 1],
      anchor: String,
      inertia: [String, this.luge._settings.parallax.inertia]
    }
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
   * Bind events
   */
  bindEvents () {
    this.luge.emitter.on('update', this.updateHandler, this)
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
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    const self = this

    this.elements.forEach(element => {
      self.removeElement(element)
    })

    this.elements = []

    done()
  }

  /**
   * Add elements
   */
  addElements () {
    document.querySelectorAll('[data-lg-parallax]').forEach(element => {
      const attributes = this.getAttributes(element)

      const disable = attributes.disable
      let enable = true

      const browser = (this.luge.browser || {})

      if (disable && browser.is) {
        if ((disable === 'desktop' && browser.is('desktop')) ||
            (disable === 'handheld' && !browser.is('desktop')) ||
            (disable === 'mobile' && browser.is('mobile')) ||
            (disable === 'tablet' && browser.is('tablet'))) {
          enable = false
        }
      }

      if (enable) {
        this.addElement(element)
      }
    })
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      this.luge.scrollobserver.add(element)

      if (element.luge.parallax.root === 'child') {
        element.style.overflow = 'hidden'

        const children = element.children
        let child = null

        for (let i = 0; i < children.length; i++) {
          if (children[i].tagName !== 'SOURCE') {
            child = children[i]
            break
          }
        }

        if (child) {
          element.luge.parallax.child = child
        }
      }

      element.luge.parallax.movement = 0
      element.luge.parallax.smoothMovement = 0

      this.elements.push(element)

      this.luge.ticker.nextTick(() => {
        element.addEventListener('scrollprogress', this.onScrollProgress)
        this.moveElement(element)
      })
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element) {
    this.luge.scrollobserver.remove(element)
    element.removeEventListener('scrollprogress', this.onScrollProgress)
  }

  /**
   * Scroll progress event handler
   * @param {Event} e Custom event
   */
  onScrollProgress (e) {
    this.moveElement(e.target)
  }

  /**
   * Move element
   * @param {HTMLElement} element Element to move
   */
  moveElement (element) {
    let progress = 0

    if (element.scrollStart < 0) {
      progress = -element.scrollProgress
    } else {
      progress = 1 - element.scrollProgress * 2
    }

    if (element.luge.parallax.anchor === 'bottom') {
      progress += 1
    } else if (element.luge.parallax.anchor === 'top') {
      progress -= 1
    }

    if (element.luge.parallax.root === 'child') {
      element.luge.parallax.movement = (element.luge.parallax.amplitude * 5) * progress
    } else {
      element.luge.parallax.movement = element.clientHeight * progress * element.luge.parallax.amplitude / 2
    }
  }

  /**
   * Tick
   */
  tick () {
    this.elements.forEach(element => {
      element.luge.parallax.smoothMovement += (element.luge.parallax.movement - element.luge.parallax.smoothMovement) * element.luge.parallax.inertia

      if (element.luge.parallax.root === 'child' && element.luge.parallax.child) {
        element.luge.parallax.child.style.transform = 'translate3d(0, ' + element.luge.parallax.smoothMovement + '%, 0) scale(1.' + (String(Math.abs(element.luge.parallax.amplitude)).replace('.', '')) + ')'
      } else {
        element.style.transform = 'translate3d(0, ' + element.luge.parallax.smoothMovement + 'px, 0)'
      }
    })
  }
}
