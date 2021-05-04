import Luge from 'Core/Core'

class Ticker {
  /**
   * Constructor
   */
  constructor () {
    this.callbacks = []
    this.onceCallbacks = []

    if (!Luge.settings.ticker.external) {
      this.fps = 60
      this.fpsInterval = 1000 / this.fps
      this.lastTickTime = null

      requestAnimationFrame(this.tick.bind(this))
    }
  }

  /**
   * Add a tick function
   * @param {Function} callback Tick function
   * @param {Object} context Context
   */
  add (callback, context) {
    let exists = false
    this.callbacks.forEach(object => {
      if (object.cb === callback) {
        exists = true
      }
    })

    if (!exists) {
      this.callbacks.push({
        cb: callback,
        context: context
      })
    }
  }

  /**
   * Remove a tick function
   * @param {String} id Tick ID
   */
  remove (callback) {
    const self = this

    this.callbacks.forEach((object, index) => {
      if (object.cb === callback) {
        delete self.callbacks[index]
      }
    })
  }

  /**
   * Execute function at next tick
   * @param {Function} callback Function to execute
   * @param {Object} context Context
   */
  nextTick (callback, context) {
    this.onceCallbacks.push({
      cb: callback,
      context: context
    })
  }

  /**
   * Call tick functions
   */
  tick (nowTime) {
    const self = this
    const elapsedTime = nowTime - this.lastTickTime

    if (elapsedTime > this.fpsInterval) {
      this.callbacks.forEach(object => {
        object.cb.apply(object.context, [nowTime])
      })

      this.onceCallbacks.forEach((object, index) => {
        object.cb.apply(object.context, [nowTime])

        delete self.onceCallbacks[index]
      })

      this.lastTickTime = nowTime - (elapsedTime % this.fpsInterval)
    }

    if (!Luge.settings.ticker.external) {
      requestAnimationFrame(this.tick.bind(this))
    }
  }
}

export default new Ticker()
