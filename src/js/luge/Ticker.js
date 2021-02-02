class Ticker {
  /**
   * Constructor
   */
  constructor () {
    this.callbacks = {}

    this.rafID = null

    requestAnimationFrame(this.tick.bind(this))
  }

  /**
   * Add a tick function
   * @param {String} id Tick ID
   * @param {Function} callback Tick function
   */
  add (id, callback) {
    console.log(this.callbacks, callback, id)

    if (id in this.callbacks === false) {
      this.callbacks[id] = callback
    }
  }

  /**
   * Remove a tick function
   * @param {String} id Tick ID
   */
  remove (id) {
    if (id in this.callbacks) {
      delete this.callbacks[id]
    }

    console.log(this.callbacks)
  }

  /**
   * Call tick functions
   */
  tick () {
    for (var id in this.callbacks) {
      this.callbacks[id]()
    }

    this.rafID = requestAnimationFrame(this.tick.bind(this))
  }
}

export default new Ticker()
