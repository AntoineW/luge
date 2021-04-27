import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Plugin from 'Core/Plugin'

class Sticky extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super()

    // Plugin properties
    this.pluginSlug = 'sticky'

    // Disable sticky on light browsers
    if (window.browser.light) {
      return
    }

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
      root: String
    }
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
  pageInit (done) {
    const elements = document.querySelectorAll('[data-lg-sticky]')

    if (elements.length > 0) {
      elements.forEach(element => {
        const attributes = this.getAttributes(element)

        this.elements.push({
          el: element,
          position: attributes.root
        })
      })
    }

    this.resizeHandler()

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
    this.setBounding()
    this.checkElements()
  }

  /**
   * Set bounding
   */
  setBounding () {
    if (this.elements) {
      const scrollTop = window.unifiedScrollTop

      this.elements.forEach(function (element) {
        element.el.style.top = ''
        element.el.style.transform = ''

        const bounding = element.el.getBoundingClientRect()

        // Set bounding
        if (element.position === 'bottom') {
          let top = Math.ceil(window.innerHeight - (bounding.bottom + scrollTop)) + 1
          top = Math.max(top, 0)
          element.el.style.top = top + 'px'

          element.start = bounding.bottom + top + scrollTop - window.innerHeight
          element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight - top
        } else if (element.position === 'top') {
          element.start = bounding.top + scrollTop
          element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight
        } else {
          element.start = bounding.top + scrollTop - ((window.innerHeight - element.el.offsetHeight) / 2)
          element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight
        }
      })
    }
  }

  /**
   * Sroll handler
   */
  scrollHandler () {
    this.checkElements()
  }

  /**
   * Check position
   */
  checkElements () {
    if (this.elements) {
      const scrollTop = window.unifiedScrollTop

      this.elements.forEach(function (element) {
        if (scrollTop >= element.start) {
          const gap = Math.min(scrollTop - element.start, element.maxGap)

          element.el.style.transform = 'translate3d(0, ' + gap + 'px, 0)'

          if (gap === element.maxGap) {
            element.el.setAttribute('data-lg-sticky-state', 'is-fixed is-fixed--bottom')
          } else {
            element.el.setAttribute('data-lg-sticky-state', 'is-moving')
          }
        } else if (scrollTop < element.start) {
          element.el.style.transform = 'translate3d(0, 0, 0)'

          element.el.setAttribute('data-lg-sticky-state', 'is-fixed is-fixed--top')
        }
      })
    }
  }
}

export default new Sticky()
