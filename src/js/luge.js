import Actions from 'Luge/Actions'

import Polyfill from 'Luge/Polyfill'

import Luge from 'Luge/Core'

import LottiePlayer from 'Luge/LottiePlayer'
import Parallax from 'Luge/Parallax'
import Preloader from 'Luge/Preloader'
import Reveal from 'Luge/Reveal'
import SmoothScroll from 'Luge/SmoothScroll'
import Sticky from 'Luge/Sticky'
import Transition from 'Luge/Transition'

window.lg = {}

window.lg.Polyfill = new Polyfill()

window.lg.Core = new Luge()

window.lg.SmoothScroll = new SmoothScroll()
window.lg.LottiePlayer = new LottiePlayer()
window.lg.Parallax = new Parallax()
window.lg.Preloader = new Preloader()
window.lg.Reveal = new Reveal()
window.lg.Sticky = new Sticky()
window.lg.Transition = new Transition()

// Site init on DOM ready
document.addEventListener('DOMContentLoaded', Actions.flow.bind(Actions, 'load'), { once: true })
