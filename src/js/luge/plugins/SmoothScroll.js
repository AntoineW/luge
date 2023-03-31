import Helpers from '../core/Helpers'
import Plugin from '../core/Plugin'

import VirtualScroll from 'virtual-scroll'

export default class SmoothScroll extends Plugin {
  /**
   * Constructor
   */
  constructor() {
    super('smooth')

    window.hasSmoothScroll = false
    window.isSmoothScrolling = false
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

      this.smoothScroll = window.scrollTop
      this.targetScroll = window.scrollTop
      this.targetSmoothScroll = window.scrollTop

      document.documentElement.classList.add('has-smooth-scroll')

      const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown'

      this.virtualScroll = new VirtualScroll({
        el: this.element,
        firefoxMultiplier: 50,
        mouseMultiplier: platform.indexOf('Win') > -1 ? 1 : 0.4,
        useKeyboard: false,
        useTouch: false,
        passive: true
      })

      this.virtualScroll.on(this.onVirtualScroll.bind(this))

      this.luge.ticker.add(this.tick, this)

      this.bindEvents()
    }
  }

  /**
   * Bind events
   */
  bindEvents () {
    this.luge.emitter.on('scroll', this.onScroll, this)
  }

  /**
   * Scroll handler
   */
  onScroll () {
    if (!window.isSmoothScrolling) {
      this.targetScroll = window.scrollTop
      this.targetSmoothScroll = window.scrollTop
      this.smoothScroll = window.scrollTop
    }
  }

  /**
   * Virtual scroll handler
   */
  onVirtualScroll({ deltaY, originalEvent: e }) {
    const objects = e.composedPath()
    const isPrevented = !!objects.find((el) => el?.hasAttribute?.('data-lg-smooth-prevent'))

    if (e.ctrlKey || isPrevented) {
      return
    }

    this.targetScroll -= deltaY
    this.targetScroll = Helpers.clamp(0, this.targetScroll, window.maxScrollTop)

    window.isSmoothScrolling = true
  }

  /**
   * Tick
   */
  tick () {
    const settings = this.luge._settings.smooth

    this.targetSmoothScroll += (this.targetScroll - this.targetSmoothScroll) * settings.inertia
    this.smoothScroll += (this.targetSmoothScroll - this.smoothScroll) * settings.inertia

    const diff = Math.abs(this.targetSmoothScroll - this.smoothScroll)

    if (window.isSmoothScrolling && diff > 0.5) {
      window.scrollTo(
        {
          top: this.smoothScroll,
          behavior: 'auto'
        }
      )
    } else if (window.isSmoothScrolling) {
      this.smoothScroll = this.targetSmoothScroll
      window.isSmoothScrolling = false
    }
  }
}
