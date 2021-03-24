// Imports
import LifeCycle from 'Luge/LifeCycle'

import Polyfill from 'Luge/Polyfill'

import Luge from 'Luge/Core'

import Emitter from 'Luge/Emitter'
import LottiePlayer from 'Luge/LottiePlayer'
import Parallax from 'Luge/Parallax'
import Preloader from 'Luge/Preloader'
import Reveal from 'Luge/Reveal'
import ScrollAnimation from 'Luge/ScrollAnimation'
import ScrollObserver from 'Luge/ScrollObserver'
import SmoothScroll from 'Luge/SmoothScroll'
import Sticky from 'Luge/Sticky'
import Ticker from 'Luge/Ticker'
import Transition from 'Luge/Transition'

// Public methods
window.luge = {
  emitter: {
    off: Emitter.off.bind(Emitter),
    on: Emitter.on.bind(Emitter),
    once: Emitter.once.bind(Emitter)
  },
  lifecycle: {
    add: LifeCycle.add.bind(LifeCycle)
  },
  preloader: {
    add: Preloader.add.bind(Preloader)
  },
  reveal: {
    add: Reveal.add.bind(Reveal)
  },
  scrollobserver: {
    add: ScrollObserver.add.bind(ScrollObserver),
    remove: ScrollObserver.remove.bind(ScrollObserver)
  },
  ticker: {
    add: Ticker.add.bind(Ticker),
    remove: Ticker.remove.bind(Ticker),
    tick: Ticker.tick.bind(Ticker)
  },
  transition: {
    add: Transition.add.bind(Transition)
  },
  settings: Luge.setSettings.bind(Luge)
}

// Site init on DOM ready
document.addEventListener('DOMContentLoaded', LifeCycle.cycle.bind(LifeCycle, 'load'), { once: true })
