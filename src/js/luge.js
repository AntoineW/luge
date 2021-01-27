// Imports
import Actions from 'Luge/Actions'

import Polyfill from 'Luge/Polyfill'

import Luge from 'Luge/Core'

import Emitter from 'Luge/Emitter'
import LottiePlayer from 'Luge/LottiePlayer'
import Parallax from 'Luge/Parallax'
import Preloader from 'Luge/Preloader'
import Reveal from 'Luge/Reveal'
import SmoothScroll from 'Luge/SmoothScroll'
import Sticky from 'Luge/Sticky'
import Transition from 'Luge/Transition'

// Public methods
window.luge = {
  addAction: Actions.add.bind(Actions),
  addReveal: Reveal.add.bind(Reveal),
  addTransition: Transition.add.bind(Transition),
  off: Emitter.off.bind(Emitter),
  on: Emitter.on.bind(Emitter),
  once: Emitter.once.bind(Emitter),
  settings: Luge.settings
}

// Site init on DOM ready
document.addEventListener('DOMContentLoaded', Actions.flow.bind(Actions, 'load'), { once: true })
