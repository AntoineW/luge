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
    var self = this

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
    var self = this

    this.elements.forEach(element => {
      self.setElementBounding(element)
    })
  }

  /**
   * Set element bouding
   * @param {HTMLElement} element Element
   */
  setElementBounding (element) {
    element.bounding = element.el.getBoundingClientRect()
    element.start = element.bounding.top + window.unifiedScrollTop - window.innerHeight + (window.innerHeight * element.threshold)
    element.middle = element.start + window.innerHeight / 2 + element.el.clientHeight / 2
    element.end = element.start + element.el.clientHeight + (window.innerHeight * (1 - element.threshold * 2))
  }

  /**
   * Check elements positions
   */
  checkElements () {
    var scrollTop = window.unifiedScrollTop

    this.elements.forEach(element => {
      var position = ''
      var progress = (scrollTop - element.start) / (element.end - element.start)

      if (progress < 0) {
        position = 'under'
      } else if (progress > 1) {
        position = 'above'
      } else {
        position = 'in'
      }

      element.el.scrollProgress = progress

      if (element.el.viewportPosition !== position) {
        element.el.viewportPosition = position

        element.el.dispatchEvent(new CustomEvent('viewportintersect'))
        element.el.dispatchEvent(new CustomEvent('viewport' + position))
      }

      if (position === 'in') {
        element.el.dispatchEvent(new CustomEvent('scrollprogress'))
      }
    })
  }

  /**
   * Add scroll element
   * @param {HTMLElement} element Element
   * @param {Number} threshold Trigger threshold
   */
  add (element, threshold = 0.15) {
    var object = {
      el: element,
      threshold: threshold
    }

    this.setElementBounding(object)

    this.elements.push(object)
  }

  /**
   * Remove scroll element
   * @param {HTMLElement} element Element
   */
  remove (element) {
    var newElements = []

    this.elements.forEach(object => {
      if (object.el !== element) {
        newElements.push(object)
      }
    })

    this.elements = newElements
  }
}

export default new ScrollObserver()
