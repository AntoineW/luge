import Emitter from 'Core/Emitter'
import LifeCycle from 'Core/LifeCycle'
import Ticker from 'Core/Ticker'

class ScrollObserver {
  constructor () {
    this.elements = []

    this.elementsToBound = []
    this.elementsToCheck = []

    this.setMaxScrollTop()

    LifeCycle.add('pageKill', this.pageKill.bind(this))
    LifeCycle.add('pageInit', this.init.bind(this), 20)

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('scroll', this.scrollHandler, this)
    Emitter.on('update', this.updateHandler, this)
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    this.elements = []
    this.elementsToBound = []
    this.elementsToCheck = []

    done()
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  init (done) {
    this.getBoundingThrottle()
    this.checkElementsThrottle()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.getBoundingThrottle()
    this.checkElementsThrottle()
  }

  /**
   * Scroll handler
   */
  scrollHandler () {
    this.checkElementsThrottle()
  }

  /**
   * Update handler
   */
  updateHandler () {
    Ticker.nextTick(() => {
      this.getBoundingThrottle()
      this.checkElementsThrottle()
    }, this)
  }

  /**
   * Set max scroll top
   */
  setMaxScrollTop () {
    window.maxScrollTop = Math.max(
      document.body ? document.body.scrollHeight : 0,
      document.body ? document.body.offsetHeight : 0,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight
  }

  /**
   * Get elements bouding throttle
   */
  getBoundingThrottle () {
    this.setMaxScrollTop()

    this.elements.forEach(element => {
      if (!this.elementsToBound.includes(element)) {
        element.scrollProgress = 0

        this.elementsToBound.push(element)
      }
    })

    Ticker.nextTick(this.getBounding.bind(this))
  }

  /**
   * Get elements bounding
   */
  getBounding () {
    this.elementsToBound.forEach(element => {
      this.setElementBounding(element)
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

    element.scrollStart = bounding.top + window.unifiedScrollTop - window.innerHeight

    element.scrollEnd = element.scrollStart + element.clientHeight + window.innerHeight
    element.scrollEnd = Math.min(element.scrollEnd, window.maxScrollTop)

    element.scrollMiddle = element.scrollStart + (element.scrollEnd - element.scrollStart) / 2

    element.setAttribute('style', style)
  }

  /**
   * Check elements throttle
   */
  checkElementsThrottle () {
    this.elements.forEach(element => {
      if (!this.elementsToCheck.includes(element)) {
        this.elementsToCheck.push(element)
      }
    })

    Ticker.nextTick(this.checkElements.bind(this))
  }

  /**
   * Check elements position
   */
  checkElements () {
    this.elementsToCheck.forEach(element => {
      this.checkElement(element)
    })
    this.elementsToCheck = []
  }

  /**
   * Check individual element position
   * @param {HTMLElement} element Element to check
   */
  checkElement (element) {
    const scrollTop = window.unifiedScrollTop

    let position = ''
    let progress = Math.min(Math.max((scrollTop - element.scrollStart) / (element.scrollEnd - element.scrollStart), 0), 1)

    if (isNaN(progress)) {
      progress = 0
    }

    if (progress <= 0) {
      position = 'under'
    } else if (progress >= 1 && element.scrollEnd < window.maxScrollTop) {
      position = 'above'
    } else {
      position = 'in'
    }

    element.scrollProgress = progress

    if (element.viewportPosition !== position) {
      element.viewportPosition = position

      element.dispatchEvent(new CustomEvent('viewportintersect'))
      element.dispatchEvent(new CustomEvent('viewport' + position))

      if (position !== 'in') {
        element.dispatchEvent(new CustomEvent('viewportout'))
      }

      element.dispatchEvent(new CustomEvent('scrollprogress'))
    } else if (progress > 0 && progress < 1) {
      element.dispatchEvent(new CustomEvent('scrollprogress'))
    }
  }

  /**
   * Add scroll element
   * @param {HTMLElement} element Element
   */
  add (element) {
    if (!this.elements.includes(element)) {
      element.scrollProgress = 0

      if (!this.elementsToBound.includes(element)) {
        this.elementsToBound.push(element)
        this.elementsToCheck.push(element)
      }

      this.elements.push(element)
    }
  }

  /**
   * Remove scroll element
   * @param {HTMLElement} element Element
   */
  remove (element) {
    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
    }

    if (this.elementsToBound.includes(element)) {
      this.elementsToBound.splice(this.elementsToBound.indexOf(element), 1)
    }

    if (this.elementsToCheck.includes(element)) {
      this.elementsToCheck.splice(this.elementsToCheck.indexOf(element), 1)
    }
  }
}

export default new ScrollObserver()
