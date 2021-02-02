class Ticker {
  /**
   * Constructor
   */
  constructor () {
    this.callbacks = []

    this.rafID = null

    requestAnimationFrame(this.tick.bind(this))
  }

  /**
   * Add a tick function
   * @param {Function} callback Tick function
   */
  add (callback, ctx) {
    var exists = false
    this.callbacks.forEach(object => {
      if (object.cb === callback) {
        exists = true
      }
    })

    if (!exists) {
      this.callbacks.push({
        cb: callback,
        ctx: ctx
      })
    }
  }

  /**
   * Remove a tick function
   * @param {String} id Tick ID
   */
  remove (callback) {
    var self = this

    this.callbacks.forEach((object, index) => {
      if (object.cb === callback) {
        delete self.callbacks[index]
      }
    })
  }

  /**
   * Call tick functions
   */
  tick () {
    this.callbacks.forEach(object => {
      object.cb.apply(object.ctx)
    })

    this.rafID = requestAnimationFrame(this.tick.bind(this))
  }
}

export default new Ticker()
