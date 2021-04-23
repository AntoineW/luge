import Helpers from 'Core/Helpers'

export default class Plugin {
  /**
   * Constructor
   */
  constructor () {
    // Plugin properties
    this.pluginSlug = ''
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

    // console.log(data)

    if (element.luge || (element.luge = {})) {
      element.luge[this.pluginSlug] = data
    }

    return data
  }
}
