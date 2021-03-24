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
      }
    }
  }

  /**
   * Start a cycle
   * @param {String} cycleName Cycle name
   */
  cycle (cycleName) {
    if (this.cycles[cycleName]) {
      this.cycles[cycleName].current = 0

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
        this.proceed(cycleName)
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
   * Call hooked callbacks
   * @param {String} cycleName Cycle name
   * @param {String} eventName Event name
   */
  do (cycleName, eventName) {
    this.events[eventName].done = 0

    // Call hooked callbacks
    if (this.events[eventName].callbacks.length > 0) {
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

    // All callback are done, call next action
    if (this.events[eventName].done >= this.events[eventName].callbacks.length) {
      this.next(cycleName, eventName)
    }
  }
}

export default new LifeCycle()
