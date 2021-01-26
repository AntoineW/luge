class Actions {
  constructor () {
    this.actionsName = [
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
      'pageKill'
    ]

    this.actions = {}

    this.actionsName.forEach(actionName => {
      this.actions[actionName] = {
        callbacks: [],
        done: 0
      }
    })

    this.flows = {
      load: {
        steps: [
          'siteInit',
          'pageInit',
          ['siteLoad', 'pageLoad'],
          'siteIn',
          'pageIn',
          'reveal'
        ],
        current: 0
      },
      transition: {
        steps: [
          ['pageFetch', 'pageOut'],
          'pageCreate',
          'pageKill',
          'pageInit',
          'pageLoad',
          'pageIn',
          'reveal'
        ],
        current: 0
      }
    }
  }

  /**
   * Start a flow
   * @param {String} flowName Flow name
   */
  flow (flowName) {
    if (this.flows[flowName]) {
      this.flows[flowName].current = 0

      this.proceed(flowName)
    }
  }

  /**
   * Proceed current flow action
   * @param {String} flowName Flow name
   */
  proceed (flowName) {
    var steps = this.flows[flowName].steps
    var current = this.flows[flowName].current

    if (current < steps.length) {
      var step = steps[current]

      // Call current step actions
      if (Array.isArray(step)) {
        step.forEach(actionName => {
          this.do(flowName, actionName)
        })
      } else {
        this.do(flowName, step)
      }
    } else {
      // Flow ended
    }
  }

  /**
   * Move to next flow step
   * @param {String} flowName Flow name
   */
  next (flowName) {
    var self = this
    var steps = this.flows[flowName].steps
    var current = this.flows[flowName].current

    if (current < steps.length) {
      var step = steps[current]

      var next = true
      var wait = []

      // Get actions to wait for
      if (typeof step === 'string') {
        wait = Array(step)
      } else {
        wait = step
      }

      // Check if all actions are done
      if (wait.length > 1) {
        wait.forEach(actionName => {
          if (self.actions[actionName].done < self.actions[actionName].callbacks.length) {
            next = false
          }
        })
      }

      if (next) {
        // Proceed to next step
        this.flows[flowName].current++
        this.proceed(flowName)
      } else {
        // Wait for all actions to be done
      }
    }
  }

  /**
   * Hook callback to action
   * @param {String} actionName Action name
   * @param {Function} callback Callback function
   * @param {Int} position Execution order
   */
  add (actionName, callback, position = 10) {
    if (this.actions[actionName]) {
      this.actions[actionName].callbacks.push({
        callback: callback,
        position: position
      })
    }
  }

  /**
   * Call hooked callbacks
   * @param {String} actionName Action name
   */
  do (flowName, actionName) {
    this.actions[actionName].done = 0

    // Call hooked callbacks
    if (this.actions[actionName].callbacks.length > 0) {
      var callbacks = this.actions[actionName].callbacks.sort((a, b) => {
        return a.position - b.position
      })

      callbacks.forEach(object => {
        object.callback(() => this.done(flowName, actionName))
      })
    } else {
      this.done(flowName, actionName)
    }
  }

  /**
   * Count done action
   * @param {String} actionName Action name
   */
  done (flowName, actionName) {
    this.actions[actionName].done++

    // All callback are done, call next action
    if (this.actions[actionName].done >= this.actions[actionName].callbacks.length) {
      this.next(flowName, actionName)
    }
  }
}

export default new Actions()
