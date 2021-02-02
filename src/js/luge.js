// Imports
import LifeCycle from 'Luge/LifeCycle'

import Polyfill from 'Luge/Polyfill'

import Luge from 'Luge/Core'

import Emitter from 'Luge/Emitter'
import LottiePlayer from 'Luge/LottiePlayer'
import Parallax from 'Luge/Parallax'
import Preloader from 'Luge/Preloader'
import Reveal from 'Luge/Reveal'
import SmoothScroll from 'Luge/SmoothScroll'
import Sticky from 'Luge/Sticky'
import Ticker from 'Luge/Ticker'
import Transition from 'Luge/Transition'

// Public methods
window.luge = {
  lifecycle: {
    add: LifeCycle.add.bind(LifeCycle)
  },
  addReveal: Reveal.add.bind(Reveal),
  addTick: Ticker.add.bind(Ticker),
  addTransition: Transition.add.bind(Transition),
  removeTick: Ticker.remove.bind(Ticker),
  off: Emitter.off.bind(Emitter),
  on: Emitter.on.bind(Emitter),
  once: Emitter.once.bind(Emitter),
  settings: Luge.settings
}

// Site init on DOM ready
document.addEventListener('DOMContentLoaded', LifeCycle.cycle.bind(LifeCycle, 'load'), { once: true })
