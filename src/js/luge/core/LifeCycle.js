import Emitter from './Emitter'
import Helpers from './Helpers'

class LifeCycle {
  /**
   * Constructor
   */
  constructor () {
    this.eventsName = [
      'siteInit',
      'pageInit',
      'siteLoad',
      'pageLoad',
      'siteIn',
      'pageIn',
      'reveal',
      'pageFetch',
      'pageOut',
      'pageCreate',
      'pageKill',
      'siteReload'
    ]

    this.events = {}

    this.eventsName.forEach(eventName => {
      this.events[eventName] = {
        callbacks: [],
        done: 0
      }
    })

    this.cycles = {
      load: {
        events: [
          'siteInit',
          'pageInit',
          ['siteLoad', 'pageLoad'],
          'siteIn',
          'pageIn',
          'reveal'
        ]
      },
      reload: {
        events: [
          'pageOut',
          'siteReload'
        ]
      },
      transition: {
        events: [
          ['pageFetch', 'pageOut'],
          'pageCreate',
          'pageKill',
          'pageInit',
          'pageLoad',
          'pageIn',
          'reveal'
        ]
      },
      refresh: {
        events: [
          'pageKill',
          'pageInit',
          'pageLoad',
          'pageIn',
          'reveal'
        ]
      }
    }

    this.debug = false
  }

  /**
   * Start a cycle
   * @param {String} cycleName Cycle name
   */
  cycle (cycleName) {
    if (this.cycles[cycleName]) {
      this.cycles[cycleName].current = 0

      if (this.debug) {
        console.log('Start cycle: ' + cycleName)
      }

      for (const eventName in this.events) {
        this.events[eventName].done = 0
      }

      this.proceed(cycleName)
    }
  }

  /**
   * Proceed current cycle event
   * @param {String} cycleName Cycle name
   */
  proceed (cycleName) {
    const events = this.cycles[cycleName].events
    const current = this.cycles[cycleName].current

    if (current < events.length) {
      const event = events[current]

      // Do current event
      if (Array.isArray(event)) {
        event.forEach(eventName => {
          this.do(cycleName, eventName)
        })
      } else {
        this.do(cycleName, event)
      }
    } else {
      // Cycle ended
      if (this.debug) {
        console.log(cycleName + ' cycle ended')
      }
    }
  }

  /**
   * Move to next cycle event
   * @param {String} cycleName Cycle name
   */
  next (cycleName) {
    const self = this
    const events = this.cycles[cycleName].events
    const current = this.cycles[cycleName].current

    if (current < events.length) {
      const event = events[current]

      let next = true
      let wait = []

      // Get events to wait for
      if (typeof event === 'string') {
        wait = Array(event)
      } else {
        wait = event
      }

      // Check if all events are done
      if (wait.length > 1) {
        wait.forEach(eventName => {
          if (self.events[eventName].done === 0 || self.events[eventName].done < self.events[eventName].callbacks.length) {
            next = false
          }
        })
      }

      if (next) {
        // Proceed to next event
        this.cycles[cycleName].current++
        requestAnimationFrame(this.proceed.bind(this, cycleName))
      } else {
        // Wait for all events to be done
      }
    }
  }

  /**
   * Hook callback to event
   * @param {String} eventName Event name
   * @param {Function} callback Callback function
   * @param {Int} position Execution order
   * @param {String} cycleName Cycle name
   */
  add (eventName, callback, position = 10, cycleName = null) {
    if (this.events[eventName]) {
      this.events[eventName].callbacks.push({
        callback: callback,
        position: position,
        cycle: cycleName
      })
    }
  }

  /**
   * Detach callback from event
   * @param {String} name Event name
   * @param {Function} callback Handler function
   * @param {String} cycleName Cycle name
   */
  remove (eventName, callback, cycleName = null) {
    const self = this

    if (this.events[eventName]) {
      this.events[eventName].callbacks.forEach((event, index) => {
        if (event.callback === callback && event.cycle === cycleName) {
          delete self.events[eventName].callbacks[index]
        }
      })
    }
  }

  /**
   * Call hooked callbacks
   * @param {String} cycleName Cycle name
   * @param {String} eventName Event name
   */
  do (cycleName, eventName) {
    this.events[eventName].done = 0

    // Call hooked callbacks
    if (this.events[eventName].callbacks.length > 0) {
      if (this.debug) {
        console.log('Do event: ' + eventName + ' (' + cycleName + ' cycle)')
      }

      Emitter.emit(Helpers.toCamelCase('before-' + eventName))

      const callbacks = this.events[eventName].callbacks.sort((a, b) => {
        return a.position - b.position
      })

      callbacks.forEach(object => {
        if (object.cycle === null || object.cycle === cycleName) {
          object.callback(() => this.done(cycleName, eventName))
        } else {
          this.done(cycleName, eventName)
        }
      })
    } else {
      this.done(cycleName, eventName)
    }
  }

  /**
   * Count done action
   * @param {String} eventName Event name
   */
  done (cycleName, eventName) {
    this.events[eventName].done++

    if (this.debug) {
      console.log('Done event: ' + eventName + ' ' + this.events[eventName].done + '/' + this.events[eventName].callbacks.length + ' (' + cycleName + ' cycle)')
    }

    // All callback are done, call next action
    if (this.events[eventName].done >= this.events[eventName].callbacks.length) {
      Emitter.emit(Helpers.toCamelCase('after-' + eventName))

      this.next(cycleName, eventName)
    }
  }

  /**
   * Enable debug
   * @param {Boolean} value Enable debug
   */
  enableDebug (value = true) {
    this.debug = value
  }
}

export default new LifeCycle()
