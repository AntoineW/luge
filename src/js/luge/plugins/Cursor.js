import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Plugin from 'Core/Plugin'
import Ticker from 'Core/Ticker'

class Cursor extends Plugin {
  /**
   * Constructor
   */
  constructor () {
    super('cursor')

    if (this.isDisabled) {
      return
    }

    this.cursors = []
    this.pointers = []

    this.hoverTags = ['a', 'button']

    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this))

    Ticker.add(this.tick, this)

    this.bindEvents()
  }

  /**
   * Set attributes
   */
  setAttributes () {
    this.pluginAttributes = {
      root: String,
      inertia: [Number, 1],
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
    const cursors = document.querySelectorAll('[data-lg-cursor]')

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

        cursor.classList.add('lg-cursor')

        this.cursors.push(cursor)
      })
    }

    done()
  }

  /**
   * Kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    this.cursors = []
    this.pointers = []

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
  tick () {
    this.pointers.forEach(pointer => {
      const position = pointer.luge.cursor.position
      const smoothPosition = pointer.luge.cursor.smoothPosition

      position.x = window.mouseX
      position.y = window.mouseY

      smoothPosition.x += (position.x - smoothPosition.x) * pointer.luge.cursor.inertia
      smoothPosition.y += (position.y - smoothPosition.y) * pointer.luge.cursor.inertia

      pointer.style.transform = 'translate3d(' + smoothPosition.x + 'px, ' + smoothPosition.y + 'px, 0)'
    })
  }
}

export default new Cursor()
