import Emitter from 'Luge/Emitter'
import LifeCycle from 'Luge/LifeCycle'

class ScrollObserver {
  constructor () {
    this.elements = []

    LifeCycle.add('pageKill', this.pageKill.bind(this))
    LifeCycle.add('reveal', this.reveal.bind(this))

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
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    this.elements = []

    done()
  }

  /**
   * Reveal
   * @param {Function} done Done function
   */
  reveal (done) {
    this.setBounding()
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
    const style = element.getAttribute('style')
    element.setAttribute('style', '')

    const bounding = element.getBoundingClientRect()

    element.scrollStart = bounding.top + window.unifiedScrollTop - window.innerHeight
    element.scrollMiddle = element.scrollStart + window.innerHeight / 2 + element.clientHeight / 2
    element.scrollEnd = element.scrollStart + element.clientHeight + window.innerHeight

    element.setAttribute('style', style)
  }

  /**
   * Check elements positions
   */
  checkElements () {
    const scrollTop = window.unifiedScrollTop
    this.elements.forEach(element => {
      let position = ''
      const progress = Math.min(Math.max((scrollTop - element.scrollStart) / (element.scrollEnd - element.scrollStart), 0), 1)

      if (progress <= 0) {
        position = 'under'
      } else if (progress >= 1) {
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
      }

      if (progress > 0 && progress < 1) {
        element.dispatchEvent(new CustomEvent('scrollprogress'))
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
