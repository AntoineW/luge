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
   * @param {Object} ctx Context
   * @param {Boolean} once Call handler only once
   */
  on (name, callback, ctx, once = false) {
    (this.events[name] || (this.events[name] = [])).push({
      cb: callback,
      ctx: ctx,
      once: once
    })
  }

  /**
   * Single event handler
   * @param {String} name Event name
   * @param {Function} callback Handler function
   * @param {Object} ctx Context
   */
  once (name, callback, ctx) {
    this.on(name, callback, ctx, true)
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
        object.cb.apply(object.ctx, data)

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
