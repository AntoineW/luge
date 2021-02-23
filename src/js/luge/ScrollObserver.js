import Emitter from 'Luge/Emitter'
import LifeCycle from 'Luge/LifeCycle'

class ScrollObserver {
  constructor () {
    this.elements = []

    LifeCycle.add('reveal', this.init.bind(this))

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('scroll', this.scrollHandler, this)
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  init (done) {
    const self = this

    // Self clean, remove elements that are no longer in DOM
    this.elements.forEach(element => {
      if (!document.body.contains(element.el)) {
        self.remove(element.el)
      }
    })

    this.checkElements()

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.setBounding()
    this.checkElements()
  }

  /**
   * Scroll handler
   */
  scrollHandler () {
    this.checkElements()
  }

  /**
   * Set elements bouding
   */
  setBounding () {
    const self = this

    this.elements.forEach(element => {
      self.setElementBounding(element)
    })
  }

  /**
   * Set element bouding
   * @param {HTMLElement} element Element
   */
  setElementBounding (element) {
    element.style = ''
    const bounding = element.getBoundingClientRect()

    element.scrollStart = bounding.top + window.unifiedScrollTop - window.innerHeight
    element.scrollMiddle = element.scrollStart + window.innerHeight / 2 + element.clientHeight / 2
    element.scrollEnd = element.scrollStart + element.clientHeight + window.innerHeight
  }

  /**
   * Check elements positions
   */
  checkElements () {
    const scrollTop = window.unifiedScrollTop

    this.elements.forEach(element => {
      let position = ''
      const progress = (scrollTop - element.scrollStart) / (element.scrollEnd - element.scrollStart)

      if (progress < 0) {
        position = 'under'
      } else if (progress > 1) {
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
      } else {
        if (progress >= 0 && progress <= 1) {
          element.dispatchEvent(new CustomEvent('scrollprogress'))
        }
      }
    })
  }

  /**
   * Add scroll element
   * @param {HTMLElement} element Element
   */
  add (element) {
    if (!this.elements.includes(element)) {
      this.setElementBounding(element)

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
  }
}

export default new ScrollObserver()
