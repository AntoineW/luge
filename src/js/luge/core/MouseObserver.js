import Emitter from 'Core/Emitter'
import Helpers from 'Core/Helpers'
import LifeCycle from 'Core/LifeCycle'
import Ticker from 'Core/Ticker'

class MouseObserver {
  constructor () {
    this.elements = []

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

    done()
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  init (done) {
    this.setBounding()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.setBounding()
  }

  /**
   * Update handler
   */
  updateHandler () {
    Ticker.nextTick(() => {
      this.setBounding()
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
   * Set elements bouding
   */
  setBounding () {
    const self = this

    this.elements.forEach(element => {
      self.setElementBounding(element)
      self.setElementPosition(element)
    })
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
        y: bounding.top + window.unifiedScrollTop
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
    const mouse = {
      x: window.mouseX - element.luge.anchor.x,
      y: window.mouseY - element.luge.anchor.y + window.unifiedScrollTop
    }

    mouse.progressX = Math.clamp(mouse.x / element.luge.width, 0, 1)
    mouse.progressY = Math.clamp(mouse.y / element.luge.height, 0, 1)

    element.luge.mouse = Helpers.mergeDeep(element.luge.mouse, mouse)
  }

  /**
   * Add mouse element
   * @param {HTMLElement} element Element
   */
  add (element) {
    if (!this.elements.includes(element)) {
      this.setElementBounding(element)
      this.setElementPosition(element)

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
