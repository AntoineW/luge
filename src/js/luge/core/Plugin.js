import Helpers from 'Core/Helpers'
import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'

export default class Plugin {
  /**
   * Constructor
   */
  constructor (slug) {
    this.pluginSlug = slug

    this.isDisabled = this.disabled()

    if (!this.isDisabled) {
      LifeCycle.add('siteInit', this.initPlugin.bind(this), 5)
    } else {
      document.documentElement.classList.add('lg-' + this.pluginSlug + '-disabled')
    }
  }

  /**
   * Check if plugin is disabled
   */
  disabled () {
    let disabled = false
    if (typeof Luge.settings[this.pluginSlug] !== 'undefined' && typeof Luge.settings[this.pluginSlug].disabled !== 'undefined') {
      disabled = Luge.settings[this.pluginSlug].disabled
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

  /**
   * Init plugin
   */
  initPlugin (done) {
    this.setAttributes()

    done()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {}
  }

  /**
   * Get attributes
   */
  getAttributes (element) {
    const attributes = this.pluginAttributes
    const data = {}

    for (const name in attributes) {
      const attribute = attributes[name]
      let attributeKey = 'lg-' + this.pluginSlug
      if (name !== 'root') {
        attributeKey += '-' + name
      }

      attributeKey = Helpers.toCamelCase(attributeKey)
      const attributeValue = element.dataset[attributeKey]

      let type, value, defaultValue

      if (typeof attribute === 'object') {
        type = attribute[0]
        defaultValue = attribute[1]
      } else {
        type = attribute
      }

      if (attributeValue === undefined && defaultValue !== undefined) {
        value = type(defaultValue)
      } else if (attributeValue === undefined && type === Boolean) {
        value = false
      } else if (attributeValue !== undefined) {
        if (type === Boolean) {
          value = (attributeValue !== 'false')
        } else {
          value = type(attributeValue)
        }
      } else {
        value = undefined
      }

      data[name] = value
    }

    if (element.luge || (element.luge = {})) {
      element.luge[this.pluginSlug] = data
    }

    return data
  }
}
