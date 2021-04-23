// Imports
import LifeCycle from 'Core/LifeCycle'

import Polyfill from 'Core/Polyfill'

import Luge from 'Core/Core'
import Emitter from 'Core/Emitter'
import ScrollObserver from 'Core/ScrollObserver'
import Ticker from 'Core/Ticker'

import LottiePlayer from 'Plugins/LottiePlayer'
import Parallax from 'Plugins/Parallax'
import Preloader from 'Plugins/Preloader'
import Reveal from 'Plugins/Reveal'
import ScrollAnimation from 'Plugins/ScrollAnimation'
import SmoothScroll from 'Plugins/SmoothScroll'
import Sticky from 'Plugins/Sticky'
import Transition from 'Plugins/Transition'

// Public methods
window.luge = {
  emitter: {
    emit: Emitter.emit.bind(Emitter),
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

// Output version
const consoleBaseStyle = 'background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; '
const consoleBoldStyle = consoleBaseStyle + 'font-weight: bold; '
const consoleWhiteStyle = 'color: black; font: 400 1em monospace; padding: 0.5em 0; '

console.log('%c powered by %cluge%c / ' + VERSION + ' %c > https://luge.cool ', consoleBaseStyle, consoleBoldStyle, consoleBaseStyle, consoleWhiteStyle)
