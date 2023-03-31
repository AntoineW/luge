import {
  Preloader,
  Reveal,
  Transition,
  ScrollAnimation,
  SmoothScroll,
  Cursor,
  Intersection,
  LottiePlayer,
  MouseAnimation,
  Parallax,
  Browser,
  Luge
} from './luge'

const luge = new Luge()

luge.addPlugin('preloader', Preloader)
luge.addPlugin('reveal', Reveal)
luge.addPlugin('transition', Transition)
luge.addPlugin('scroll', ScrollAnimation)
luge.addPlugin('smooth', SmoothScroll)
luge.addPlugin('cursor', Cursor)
luge.addPlugin('intersection', Intersection)
luge.addPlugin('lottie', LottiePlayer)
luge.addPlugin('mouse', MouseAnimation)
luge.addPlugin('parallax', Parallax)
luge.addPlugin('browser', Browser)

luge.settings({
  cursor: {
    disabled: luge.browser.some(['tablet', 'mobile'])
  },
  smooth: {
    disabled: luge.browser.some(['tablet', 'mobile']) || luge.browser.satisfies({ safari: '<=12' })
  }
})

luge.init()

window.luge = luge
