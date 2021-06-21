class Helpers {
  /**
   * Check if the variable is an array
   * @param {*} item
   * @returns {Boolean}
   */
  static isArray(item) {
    return (item && typeof item === 'object' && Array.isArray(item))
  }

  /**
   * Check if the variable is an object
   * @param {*} item
   * @returns {Boolean}
   */
  static isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item))
  }

  /**
   * Check if the variable is a string
   * @param {*} item
   * @returns {Boolean}
   */
  static isString(item) {
    return (item && typeof item === 'string')
  }

  /**
   * Deep merge two objects
   * @param {Object} target
   * @param {Object} source
   * @returns {Object} Merged object
   */
  static mergeDeep(target, source) {
    const output = Object.assign({}, target)
    if (Helpers.isObject(target) && Helpers.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (Helpers.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] })
          } else {
            if (Helpers.isObject(target[key]) && Helpers.isObject(source[key])) {
              output[key] = Helpers.mergeDeep(target[key], source[key])
            } else {
              output[key] = source[key]
            }
          }
        } else {
          Object.assign(output, { [key]: source[key] })
        }
      })
    }
    return output
  }

  /**
   * Convert a string to camelCase
   * @param {String} string The string to convert
   */
  static toCamelCase (string) {
    if (Helpers.isString(string)) {
      return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      }).replace(/\W+/g, '')
    } else {
      return string
    }
  }

  /**
   * Convert a string to UpperCamelCase
   * @param {String} string The string to convert
   */
  static toUpperCamelCase (string) {
    if (Helpers.isString(string)) {
      string = Helpers.toCamelCase(string)

      return string.charAt(0).toUpperCase() + string.slice(1)
    } else {
      return string
    }
  }
}

export default Helpers
