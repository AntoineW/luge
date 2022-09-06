import Emitter from 'Core/Emitter'
import Helpers from 'Core/Helpers'
import LifeCycle from 'Core/LifeCycle'
import Ticker from 'Core/Ticker'

class MouseObserver {
  constructor () {
    this.elements = []

    this.elementsToBound = []

    LifeCycle.add('pageKill', this.pageKill.bind(this))
    LifeCycle.add('pageInit', this.init.bind(this), 20)

    Ticker.add(this.tick, this)

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('mouseMove', this.mouseHandler, this)
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('update', this.updateHandler, this)
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    this.elements = []
    this.elementsToBound = []

    done()
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  init (done) {
    this.getBoundingThrottle()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.getBoundingThrottle()
  }

  /**
   * Update handler
   */
  updateHandler () {
    Ticker.nextTick(() => {
      this.getBoundingThrottle()
    }, this)
  }

  /**
   * Mouse handler
   */
  mouseHandler () {
    const self = this

    this.elements.forEach(element => {
      self.setElementPosition(element)
    })

    window.mouseLastScrollTop = window.scrollTop
  }

  /**
   * Get elements bouding throttle
   */
  getBoundingThrottle () {
    this.elements.forEach(element => {
      if (!this.elementsToBound.includes(element)) {
        this.elementsToBound.push(element)
      }
    })

    Ticker.nextTick(this.getBounding.bind(this))
  }

  /**
   * Get elements bouding
   */
  getBounding () {
    this.elementsToBound.forEach(element => {
      this.setElementBounding(element)
      this.setElementPosition(element)
    })
    this.elementsToBound = []
  }

  /**
   * Set element bouding
   * @param {HTMLElement} element Element
   */
  setElementBounding (element) {
    const style = element.getAttribute('style')
    element.setAttribute('style', '')

    const bounding = element.getBoundingClientRect()

    const properties = {
      anchor: {
        x: bounding.left,
        y: bounding.top + window.scrollTop
      },
      width: element.offsetWidth,
      height: element.offsetHeight
    }

    if (element.luge || (element.luge = {})) {
      element.luge = Helpers.mergeDeep(element.luge, properties)
    }

    element.setAttribute('style', style)
  }

  /**
   * Set element position
   * @param {HTMLElement} element Element
   */
  setElementPosition (element) {
    if (element.luge && element.luge.anchor) {
      const mouse = {
        x: window.mouseX - element.luge.anchor.x,
        y: window.mouseY - element.luge.anchor.y + window.scrollTop
      }

      mouse.progressX = Math.clamp(mouse.x / element.luge.width, 0, 1)
      mouse.progressY = Math.clamp(mouse.y / element.luge.height, 0, 1)

      element.luge.mouse = Helpers.mergeDeep(element.luge.mouse, mouse)
    }
  }

  /**
   * Add mouse element
   * @param {HTMLElement} element Element
   */
  add (element) {
    if (!this.elements.includes(element)) {
      if (!this.elementsToBound.includes(element)) {
        this.elementsToBound.push(element)
      }

      this.elements.push(element)
    }
  }

  /**
   * Remove mouse element
   * @param {HTMLElement} element Element
   */
  remove (element) {
    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
    }

    if (this.elementsToBound.includes(element)) {
      this.elementsToBound.splice(this.elementsToBound.indexOf(element), 1)
    }
  }

  /**
   * Raf animation
   */
  tick () {
    const self = this
    const diffScroll = window.scrollTop - window.mouseLastScrollTop

    if (diffScroll !== 0) {
      this.elements.forEach(element => {
        self.setElementPosition(element)
      })
    }
  }
}

export default new MouseObserver()
