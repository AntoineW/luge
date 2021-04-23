class Helpers {
  /**
   * Convert a string to camelCase
   * @param {String} string The string to convert
   */
  static toCamelCase (string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\W+/g, '')
  }

  /**
   * Convert a string to UpperCamelCase
   * @param {String} string The string to convert
   */
  static toUpperCamelCase (string) {
    string = Helpers.toCamelCase(string)

    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

export default Helpers
