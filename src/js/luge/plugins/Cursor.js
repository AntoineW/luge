import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Plugin from 'Core/Plugin'
import Ticker from 'Core/Ticker'

class Cursor extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('cursor')

    if (this.isDisabled) {
      return
    }

    this.elements = []

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
      inertia: [Number, 1]
    }
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const elements = document.querySelectorAll('[data-lg-cursor]')

    if (elements.length > 0) {
      elements.forEach(element => {
        const attributes = this.getAttributes(element)

        element.luge.cursor.position = {
          x: 0,
          y: 0
        }
        element.luge.cursor.smoothPosition = {
          x: 0,
          y: 0
        }

        element.classList.add('lg-cursor')

        this.getElementSize(element)

        this.elements.push(element)
      })
    }

    done()
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    this.elements = []

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    const self = this

    if (this.elements) {
      this.elements.forEach(function (element) {
        self.getElementSize(element)
      })
    }
  }

  /**
   * Get element size
   */
  getElementSize (element) {
    element.luge.cursor.width = element.offsetWidth
    element.luge.cursor.height = element.offsetHeight

    element.luge.cursor.halfWidth = element.luge.cursor.width / 2
    element.luge.cursor.halfHeight = element.luge.cursor.height / 2
  }

  /**
   * Raf animation
   */
  tick () {
    this.elements.forEach(element => {
      const position = element.luge.cursor.position
      const smoothPosition = element.luge.cursor.smoothPosition

      position.x = window.mouseX - element.luge.cursor.halfWidth
      position.y = window.mouseY - element.luge.cursor.halfHeight

      smoothPosition.x += (position.x - smoothPosition.x) * element.luge.cursor.inertia
      smoothPosition.y += (position.y - smoothPosition.y) * element.luge.cursor.inertia

      element.style.transform = 'translate3d(' + smoothPosition.x + 'px, ' + smoothPosition.y + 'px, 0)'
    })
  }
}

export default new Cursor()
