export default class PreLoader {
  constructor () {
    window.lg.Core.addAction('siteIn', this.siteIn.bind(this))
  }

  siteIn (done) {
    var preloader = document.querySelector('[data-lg-preloader]')

    if (preloader && preloader.getAttribute('data-lg-preloader') === '') {
      preloader.style.transition = 'opacity 0.3s linear'
      setTimeout(() => { preloader.style.opacity = 0 }, 10)

      done()

      setTimeout(() => {
        // preloader.parentNode.removeChild(preloader)
      }, 300)
    } else {
      done()
    }
  }
}
