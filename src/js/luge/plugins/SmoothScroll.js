import Core from '../core/Core'
import Plugin from '../core/Plugin'

import Lenis from '@studio-freight/lenis'

export default class SmoothScroll extends Plugin {
  /**
   * Constructor
   */
  constructor(luge) {
    super('smooth')

    this.luge = luge

    window.hasSmoothScroll = false
  }

  /**
   * Init
   */
  init() {
    super.init()

    this.element = document.documentElement

    this.hasSmooth = this.element.hasAttribute('data-lg-smooth')

    if (this.hasSmooth) {
      window.hasSmoothScroll = true

      this.lenis = new Lenis()

      this.lenis.on('scroll', () => {
        Core.updateScroll()
      })

      document.documentElement.classList.add('has-smooth-scroll')

      this.luge.ticker.add(this.lenis.raf, this.lenis)
    }
  }
}
