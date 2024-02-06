# [luge](https://luge.cool/docs/ "luge")
Front-end animation plugin for uncreative developers.

- Preview: https://luge.cool
- Documentation: https://luge.cool/docs/
- Support: https://github.com/AntoineW/luge/issues
- Discussions: https://github.com/AntoineW/luge/discussions

## Usage
luge is made to be fast and easy to use. Most of the things happen under the hood so you just have to include the files to start using it:

    <link rel="stylesheet" href="/path/to/luge.css">
    <script src="/path/to/luge.umd.js"></script>

Note that the CSS file is only needed if you plan to use the built-in animations (reveals or transitions).

If you want to use tree shaking to import only the functionalities you need and lighten the output build,  luge is also available as a npm package:

```npm install @waaark/luge```

Then import what you need:

```
// Import core and plugins
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

// Create luge instance
const luge = new Luge()

// Add only the plugin you need
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

// Configure the settings
luge.settings({
  cursor: {
    disabled: luge.browser.some(['tablet', 'mobile'])
  },
  smooth: {
    disabled: luge.browser.some(['tablet', 'mobile']) || luge.browser.satisfies({ safari: '<=12' })
  }
})

// And init
luge.init()
```

That's it.

The next thing to do is to add luge `data-lg-...` attributes in your html to start using luge features, as explained in the [documentation](https://luge.cool/docs/).
