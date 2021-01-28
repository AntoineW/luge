class Polyfill {
  /**
   * Constructor
   */
  constructor () {
    this.closestPolyfill()
    this.customEventPolyfill()
  }

  /**
   * Finds the closest nodes
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest}
   */
  closestPolyfill () {
    /*  eslint-disable */
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector
    }

    if (!Element.prototype.closest) {
      Element.prototype.closest = function(s) {
        var el = this

        do {
          if (Element.prototype.matches.call(el, s)) return el
          el = el.parentElement || el.parentNode
        } while (el !== null && el.nodeType === 1)
        return null
      }
    }
    /*  eslint-enable */
  }

  /**
   * Custom event
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#polyfill}
   */
  customEventPolyfill () {
    /*  eslint-disable */
    if (typeof window.CustomEvent === 'function') {
      return false
    }

    function CustomEvent (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null }
      var evt = document.createEvent('CustomEvent')
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
      return evt
    }

    window.CustomEvent = CustomEvent
    /*  eslint-enable */
  }
}

export default new Polyfill()
