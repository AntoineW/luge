import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import MouseObserver from 'Core/MouseObserver'
import Ticker from 'Core/Ticker'

class MouseAnimation extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('mouse')

    if (this.isDisabled) {
      return
    }

    this.elements = []

    this.mouse = {
      x: window.mouseX,
      y: window.mouseY
    }

    window.mouseSpeed = 0

    // Listeners
    // ...

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    Ticker.add(this.tick, this)

    this.getMouseMovement()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      inertia: [String, Luge.settings.mouse.inertia]
    }
  }

  /**
   * Get attributes
   */
  getAttributes (element) {
    const data = super.getAttributes(element)

    if (data.inertia) {
      const randInertia = data.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

      if (randInertia) {
        data.inertia = Number(randInertia[1]) + ((Number(randInertia[2]) - Number(randInertia[1])) * Math.random())
      } else {
        data.inertia = Number(data.inertia)
      }

      data.inertia = Math.max(Math.min(data.inertia, 0.99), 0)
    }

    return data
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const elements = document.querySelectorAll('[data-lg-mouse]')
    const self = this

    elements.forEach(element => {
      self.addElement(element)
    })

    done()
  }

  /**
   * Add element to observer
   * @param {HTMLElement} element Element to add
   */
  addElement (element) {
    if (!this.elements.includes(element)) {
      this.getAttributes(element)

      MouseObserver.add(element)

      element.luge.mouse.smoothX = element.luge.mouse.x
      element.luge.mouse.smoothY = element.luge.mouse.y
      element.luge.mouse.smoothProgressX = element.luge.mouse.progressX
      element.luge.mouse.smoothProgressY = element.luge.mouse.progressY

      this.elements.push(element)
    }
  }

  /**
   * Remove element from observer
   * @param {HTMLElement} element Element to remove
   */
  removeElement (element) {
    if (this.elements.includes(element)) {
      this.elements.splice(this.elements.indexOf(element), 1)
    }
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    const self = this

    this.elements.forEach(element => {
      self.removeElement(element)
    })

    done()
  }

  /**
   * Get mouse movement
   */
  getMouseMovement () {
    const distX = this.mouse.x - window.mouseX
    const distY = this.mouse.y - window.mouseY
    const dist = Math.hypot(distX, distY)

    window.mouseSpeed += (dist - window.mouseSpeed) * 0.5
    if (window.mouseSpeed < 0.001) {
      window.mouseSpeed = 0
    }

    if (dist > 1) {
      const angle = Math.atan2(distY, distX) * (180 / Math.PI) + 180

      window.mouseAngle = angle

      if (angle >= 45 && angle < 135) {
        window.mouseDirection = 'down'
      } else if (angle >= 135 && angle < 225) {
        window.mouseDirection = 'left'
      } else if (angle >= 225 && angle < 315) {
        window.mouseDirection = 'up'
      } else {
        window.mouseDirection = 'right'
      }
    }

    this.mouse = {
      x: window.mouseX,
      y: window.mouseY
    }

    setTimeout(this.getMouseMovement.bind(this), 20)
  }

  /**
   * Raf animation
   */
  tick () {
    this.elements.forEach(element => {
      const mouse = element.luge.mouse

      if (mouse.inertia) {
        mouse.smoothX += (mouse.x - mouse.smoothX) * mouse.inertia
        mouse.smoothY += (mouse.y - mouse.smoothY) * mouse.inertia
        mouse.smoothProgressX += (mouse.progressX - mouse.smoothProgressX) * mouse.inertia
        mouse.smoothProgressY += (mouse.progressY - mouse.smoothProgressY) * mouse.inertia

        element.style.setProperty('--mouse-x', mouse.smoothX)
        element.style.setProperty('--mouse-y', mouse.smoothY)
        element.style.setProperty('--mouse-progress-x', mouse.smoothProgressX)
        element.style.setProperty('--mouse-progress-y', mouse.smoothProgressY)
      } else {
        element.style.setProperty('--mouse-x', mouse.x)
        element.style.setProperty('--mouse-y', mouse.y)
        element.style.setProperty('--mouse-progress-x', mouse.progressX)
        element.style.setProperty('--mouse-progress-y', mouse.progressY)
      }
    })
  }
}

export default new MouseAnimation()
