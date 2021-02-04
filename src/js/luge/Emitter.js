class Emitter {
  /**
   * Constructor
   */
  constructor () {
    this.events = []
  }

  /**
   * Attach handler to event
   * @param {String} name Event name
   * @param {Function} callback Handler function
   * @param {Object} context Context
   * @param {Boolean} once Call handler only once
   */
  on (name, callback, context, once = false) {
    (this.events[name] || (this.events[name] = [])).push({
      cb: callback,
      context: context,
      once: once
    })
  }

  /**
   * Single event handler
   * @param {String} name Event name
   * @param {Function} callback Handler function
   * @param {Object} context Context
   */
  once (name, callback, context) {
    this.on(name, callback, context, true)
  }

  /**
   * Emit event
   * @param {String} name Event Name
   */
  emit (name) {
    var self = this
    var data = [].slice.call(arguments, 1)

    if (this.events[name]) {
      this.events[name].forEach((object, index) => {
        object.cb.apply(object.context, data)

        if (object.once) {
          delete self.events[name][index]
        }
      })
    }
  }

  /**
   * Detact handler from event
   * @param {String} name Event name
   * @param {Function} callback Handler function
   */
  off (name, callback) {
    var self = this

    if (this.events[name]) {
      this.events[name].forEach((object, index) => {
        if (object.cb === callback) {
          delete self.events[name][index]
        }
      })
    }
  }
}

export default new Emitter()
