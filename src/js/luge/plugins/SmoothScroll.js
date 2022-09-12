import LifeCycle from 'Core/LifeCycle'
import Emitter from 'Core/Emitter'
import Luge from 'Core/Core'
import Plugin from 'Core/Plugin'
import Ticker from 'Core/Ticker'

import Lenis from '@studio-freight/lenis'

class SmoothScroll extends Plugin {
  /**
   * Constructor
   */
  constructor() {
    super('smooth')

    window.hasSmoothScroll = false

    this.lenis = null
  }

  /**
   * Init
   */
  init() {
    super.init()

    const hasSmooth = !!document.querySelector('html[data-lg-smooth]')

    if (hasSmooth) {
      window.hasSmoothScroll = true

      document.documentElement.classList.add('has-smooth-scroll')

      this.lenis = new Lenis({
        smooth: hasSmooth,
        direction: 'vertical',
        wrapper: window,
        content: document.body
      })

      this.onScroll = this.onScroll.bind(this)
      this.lenis.on('scroll', this.onScroll)

      Ticker.add(this.lenis.raf, this.lenis)
    }
  }

  /**
   * Scroll handler
   */
  onScroll() {
    window.scrollTop = window.scrollY

    // Backward compatibility
    window.unifiedScrollTop = window.scrollTop

    Emitter.emit('scroll')
  }
}

export default new SmoothScroll()
