import LifeCycle from 'Core/LifeCycle'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import Ticker from 'Core/Ticker'

class Cursor extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('cursor')
  }

  /**
   * Init
   */
  init () {
    super.init()

    this.cursors = []
    this.pointers = []
    this.trails = []

    this.hoverTags = ['a', 'button', 'input']

    LifeCycle.add('pageInit', this.pageInit.bind(this))

    Ticker.add(this.tick, this)

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      inertia: [Number, Luge.settings.cursor.inertia],
      length: [Number, Luge.settings.cursor.trailLength],
      hide: Boolean
    }
  }

  /**
   * Bind events
   */
  bindEvents () {
    document.documentElement.addEventListener('mouseenter', this.hoverHandler.bind(this), { capture: true, passive: true })
    document.documentElement.addEventListener('mouseleave', this.hoverHandler.bind(this), { capture: true, passive: true })
  }

  /**
   * Initialization
   * @param {Function} done Done function
   */
  pageInit (done) {
    const self = this
    const cursors = document.querySelectorAll('[data-lg-cursor]:not(.lg-cursor)')

    if (cursors.length > 0) {
      cursors.forEach(cursor => {
        const attributes = this.getAttributes(cursor)

        if (attributes.hide) {
          document.documentElement.classList.add('lg-cursor-hide')
        }

        // Pointers
        const pointers = cursor.querySelectorAll('[data-lg-cursor-pointer')
        pointers.forEach(pointer => {
          pointer.luge = {
            cursor: {
              position: {
                x: 0,
                y: 0
              },
              smoothPosition: {
                x: 0,
                y: 0
              }
            }
          }

          if (pointer.hasAttribute('data-lg-cursor-inertia')) {
            pointer.luge.cursor.inertia = Number(pointer.getAttribute('data-lg-cursor-inertia'))
          } else {
            pointer.luge.cursor.inertia = attributes.inertia
          }

          pointer.classList.add('lg-cursor-pointer')

          self.pointers.push(pointer)
        })

        // Trails
        const trails = cursor.querySelectorAll('[data-lg-cursor-trail')
        trails.forEach(trail => {
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          svg.appendChild(path)

          trail.appendChild(svg)

          trail.luge = {
            cursor: {
              position: {
                x: 0,
                y: 0
              },
              smoothPosition: {
                x: 0,
                y: 0
              },
              points: [],
              path: path
            }
          }

          if (trail.hasAttribute('data-lg-cursor-inertia')) {
            trail.luge.cursor.inertia = Number(trail.getAttribute('data-lg-cursor-inertia'))
          } else {
            trail.luge.cursor.inertia = attributes.inertia
          }

          if (trail.hasAttribute('data-lg-cursor-length')) {
            trail.luge.cursor.length = Number(trail.getAttribute('data-lg-cursor-length'))
          } else {
            trail.luge.cursor.length = attributes.length
          }

          trail.classList.add('lg-cursor-trail')

          self.trails.push(trail)
        })

        cursor.classList.add('lg-cursor')

        this.cursors.push(cursor)
      })
    }

    done()
  }

  /**
   * Hover handler
   */
  hoverHandler (e) {
    const element = e.target
    const tag = element.tagName.toLowerCase()
    const style = element.getAttribute('data-lg-hover')
    let hover = null

    if (this.hoverTags.includes(tag) || style !== null) {
      hover = (e.type === 'mouseenter')
    }

    if (hover !== null) {
      this.cursors.forEach(cursor => {
        cursor.classList.toggle('lg-cursor--hover', hover)

        if (style !== null && style !== '') {
          cursor.classList.toggle('lg-cursor--hover--' + style, hover)
        }
      })
    }
  }

  /**
   * Raf animation
   */
  tick (timestamp) {
    // Pointers
    this.pointers.forEach(pointer => {
      // Get position
      const position = pointer.luge.cursor.position
      const smoothPosition = pointer.luge.cursor.smoothPosition

      position.x = window.mouseX
      position.y = window.mouseY

      smoothPosition.x += (position.x - smoothPosition.x) * pointer.luge.cursor.inertia
      smoothPosition.y += (position.y - smoothPosition.y) * pointer.luge.cursor.inertia

      pointer.style.transform = 'translate3d(' + smoothPosition.x + 'px, ' + smoothPosition.y + 'px, 0)'
    })

    // Trails
    this.trails.forEach(trail => {
      // Get position
      const position = trail.luge.cursor.position
      const smoothPosition = trail.luge.cursor.smoothPosition

      position.x = window.mouseX
      position.y = window.mouseY

      if (window.mouseX !== -1) {
        smoothPosition.x += (position.x - smoothPosition.x) * trail.luge.cursor.inertia
        smoothPosition.y += (position.y - smoothPosition.y) * trail.luge.cursor.inertia

        // Update points
        const points = trail.luge.cursor.points

        const point = {
          x: smoothPosition.x,
          y: smoothPosition.y
        }
        points.push(point)

        if (points.length > trail.luge.cursor.length) {
          points.shift()
        }

        // Draw smooth line # https://francoisromain.medium.com/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
        let d = ''
        let trailLength = 0

        const svgPath = (points, command) => {
          const d = points.reduce((acc, point, i, a) => i === 0

            ? `M ${point.x},${point.y}`

            : `${acc} ${command(point, i, a)}`
          , '')
          return `${d}`
        }

        const line = (pointA, pointB) => {
          const lengthX = pointB.x - pointA.x
          const lengthY = pointB.y - pointA.y
          return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
          }
        }

        const controlPoint = (current, previous, next, reverse) => {
          const p = previous || current
          const n = next || current

          const smoothing = 0.2

          const o = line(p, n)

          trailLength += o.length

          const angle = o.angle + (reverse ? Math.PI : 0)
          const length = o.length * smoothing

          const x = current.x + Math.cos(angle) * length
          const y = current.y + Math.sin(angle) * length
          return [x, y]
        }

        const bezierCommand = (point, i, a) => {
          const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)

          const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true)
          return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point.x},${point.y}`
        }

        d = svgPath(points, bezierCommand)

        trail.luge.cursor.path.setAttribute('d', d)

        trail.style.setProperty('--length', trailLength)
      }
    })
  }
}

export default new Cursor()
