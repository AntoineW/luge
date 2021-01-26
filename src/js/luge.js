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

// Site init on DOM ready
document.addEventListener('DOMContentLoaded', Actions.flow.bind(Actions, 'load'), { once: true })
