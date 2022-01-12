import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Plugin from 'Core/Plugin'
import ViewportObserver from 'Core/ViewportObserver'

class Intersection extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('intersection')

    // Listeners
    this.listeners = {
      onViewportIntersect: this.onViewportIntersect.bind(this)
    }
  }

  /**
   * Init
   */
  init () {
    super.init()

    this.elements = []

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      class: String
    }
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
    const elements = document.querySelectorAll('[data-lg-intersection]')
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
      this.getAttributes(element)

      ViewportObserver.add(element)
      element.addEventListener('viewportintersect', this.listeners.onViewportIntersect)

      this.elements.push(element)
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element) {
    if (this.elements.includes(element)) {
      ViewportObserver.remove(element)
      element.removeEventListener('viewportintersect', this.listeners.onViewportIntersect)

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
   * On viewport intersect event handler
   * @param {Event} e Custom event
   */
  onViewportIntersect (e) {
    const element = e.target
    const position = element.luge.viewport.position
    const CSSClass = element.luge.intersection.class ? element.luge.intersection.class.split(' ') : false

    // Set CSS classes
    element.classList.remove('is-in', 'is-out', 'is-out-top', 'is-out-bottom')

    if (position === 'in') {
      element.classList.add('is-in')

      if (CSSClass) {
        document.documentElement.classList.add(...CSSClass)
      }
    } else {
      if (CSSClass) {
        document.documentElement.classList.remove(...CSSClass)
      }

      if (position === 'above') {
        element.classList.add('is-out', 'is-out-top')
      } else {
        element.classList.add('is-out', 'is-out-bottom')
      }
    }
  }
}

export default new Intersection()
