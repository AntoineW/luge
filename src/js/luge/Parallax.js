import Actions from 'Luge/Actions'
import Emitter from 'Luge/Emitter'

class Parallax {
  /**
   * Constructor
   */
  constructor () {
    // Disable parallax on light browsers
    if (window.browser.light) {
      return
    }

    this.elements = []

    Actions.add('pageInit', this.pageInit.bind(this))
    Actions.add('pageKill', this.pageKill.bind(this))

    this.bindEvents()
  }

  /**
   * Bind events
   */
  bindEvents () {
    Emitter.on('resize', this.resizeHandler, this)
    Emitter.on('scroll', this.scrollHandler, this)
  }

  /**
   * Init
   */
  pageInit (done) {
    document.querySelectorAll('[data-lg-parallax]').forEach(element => {
      var disable = element.getAttribute('data-lg-parallax-disable')
      var enable = true

      if (disable) {
        if ((disable === 'mobile' && !window.browser.is('desktop')) ||
            (disable === 'phone' && window.browser.is('mobile')) ||
            (disable === 'tablet' && window.browser.is('tablet'))) {
          enable = false
        }
      }

      element.parallax = enable

      if (enable) {
        this.elements.push({ el: element })
      }
    })

    this.resizeHandler()

    done()
  }

  /**
   * Kill
   */
  pageKill (done) {
    this.elements = []

    done()
  }

  /**
   * Resize handler
   */
  resizeHandler () {
    this.setBounding()
    this.checkElements()
  }

  /**
   * Set bounding
   */
  setBounding () {
    if (this.elements) {
      var scrollTop = (window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop)
      scrollTop = Math.max(scrollTop, 0)

      this.elements.forEach(function (element) {
        element.bounding = element.el.getBoundingClientRect()

        // Set bounding
        element.start = element.bounding.top + scrollTop - window.innerHeight
        element.end = element.start + element.el.offsetHeight + window.innerHeight

        // Elements above the fold start at their position
        element.start = Math.max(element.start, 0)

        // Get parallax options
        element.amplitude = element.el.getAttribute('data-lg-parallax-amplitude') ? element.el.getAttribute('data-lg-parallax-amplitude') : 1

        if (typeof element.amplitude === 'string') {
          var randAmplitude = element.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m)

          if (randAmplitude) {
            element.amplitude = Number(randAmplitude[1]) + ((Number(randAmplitude[2]) - Number(randAmplitude[1])) * Math.random())
          } else {
            element.amplitude = Number(element.amplitude)
          }
        }

        element.type = element.el.getAttribute('data-lg-parallax')
        element.anchor = element.el.getAttribute('data-lg-parallax-anchor')

        if (element.type === 'image') {
          element.target = element.el.querySelector('img')
          element.el.style.overflow = 'hidden'
        } else if (element.type === 'video') {
          element.target = element.el.querySelector('video')
          element.el.style.overflow = 'hidden'
        }
      })
    }
  }

  /**
   * Sroll handler
   */
  scrollHandler () {
    this.checkElements()
  }

  /**
   * Check position
   */
  checkElements () {
    if (this.elements) {
      var scrollTop = (window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop)
      scrollTop = Math.max(scrollTop, 0)

      this.elements.forEach(function (element, index) {
        var progress = 0

        if (scrollTop > element.end) {
          progress = -1
        } else if (scrollTop < element.start) {
          progress = 1
        } else {
          progress = ((scrollTop - element.start) / (element.end - element.start))

          // Stick progress to limits
          if (progress > 0.995) {
            progress = 1
          } else if (progress < 0.005) {
            progress = 0
          }

          if (element.start > 0) {
            progress = 1 - progress * 2

            if (element.anchor === 'bottom') {
              progress += 1
            } else if (element.anchor === 'top') {
              progress -= 1
            }
          } else {
            // Above the fold elements
            progress = -progress
          }
        }

        if (element.type === 'image' || element.type === 'video') {
          var movement = (element.amplitude * 5) * progress

          element.target.style.transform = 'translate3d(0, ' + movement + '%, 0) scale(1.' + (String(Math.abs(element.amplitude)).replace('.', '')) + ')'
        } else {
          movement = element.el.clientHeight * progress * element.amplitude / 2

          element.el.style.transform = 'translate3d(0, ' + movement + 'px, 0)'
        }
      })
    }
  }
}

export default new Parallax()
