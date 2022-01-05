import Helpers from 'Core/Helpers'
import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'

export default class Feature {
  /**
   * Constructor
   */
  constructor (slug) {
    this.featureSlug = slug

    LifeCycle.add('siteInit', this.beforeInit.bind(this), 5)
  }

  /**
   * Before init
   */
  beforeInit (done) {
    this.isDisabled = this.disabled()

    if (this.isDisabled) {
      document.documentElement.classList.add('lg-' + this.featureSlug + '-disabled')
    } else {
      this.init()
    }

    done()
  }

  /**
   * Init
   */
  init () {}

  /**
   * Check if feature is disabled
   */
  disabled () {
    let disabled = false
    if (typeof Luge.settings[this.featureSlug] !== 'undefined' && typeof Luge.settings[this.featureSlug].disabled !== 'undefined') {
      disabled = Luge.settings[this.featureSlug].disabled
    }

    if (Helpers.isString(disabled)) {
      disabled = window.browser.is(disabled, true)
    } else if (Helpers.isArray(disabled)) {
      disabled = disabled.some(element => {
        if (Helpers.isString(element)) {
          return window.browser.is(element, true)
        } else if (Helpers.isObject(element)) {
          return window.browser.satisfies(element)
        }

        return false
      })
    } else if (Helpers.isObject(disabled)) {
      disabled = window.browser.satisfies(disabled)
    }

    return disabled
  }
}
