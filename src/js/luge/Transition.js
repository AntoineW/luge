import 'whatwg-fetch'
import LifeCycle from 'Luge/LifeCycle'

class Transition {
  /**
   * Constructor
   */
  constructor () {
    this.url = window.location.href
    this.pageFetched = null

    this.transitions = {
      in: {},
      out: {}
    }

    this.listeners = { linkHandler: this.linkHandler.bind(this) }

    LifeCycle.add('siteInit', this.siteInit.bind(this))
    LifeCycle.add('pageInit', this.pageInit.bind(this))
    LifeCycle.add('pageFetch', this.pageFetch.bind(this))
    LifeCycle.add('pageOut', this.pageOut.bind(this))
    LifeCycle.add('pageIn', this.pageIn.bind(this))
    LifeCycle.add('pageCreate', this.pageCreate.bind(this))
    LifeCycle.add('pageKill', this.pageKill.bind(this), 999)
  }

  /**
   * Bind links event
   */
  bindLinksEvent () {
    if (document.querySelector('[data-lg-page]')) {
      document.querySelectorAll('a').forEach(el => {
        el.addEventListener('click', this.listeners.linkHandler)
      })
    }
  }

  /**
   * Unbind links handler
   */
  unbindLinksEvent () {
    document.querySelectorAll('a').forEach(el => { el.removeEventListener('click', this.listeners.linkHandler) })
  }

  /**
   * Link handler
   * @param {Event} e Mouse event
   */
  linkHandler (e) {
    var element = e.currentTarget
    var href = element.getAttribute('href')

    if (href &&
      !element.closest('#wpadminbar') &&
      element.getAttribute('data-lg-transition') !== 'disabled' &&
      element.getAttribute('target') !== '_blank') {
      // Check if it's an internal URL
      if (href.indexOf(window.location.origin) === 0 ||
          href.indexOf('/') === 0 ||
          href.indexOf('/') === -1) {
        e.preventDefault()

        if (window.location.href === href) {
          return
        }

        this.navigateTo(href)

        // Change page url
        history.pushState(null, null, this.url)
      }
    }
  }

  /**
   * Navigate to page
   * @param {URL} url New page URL
   */
  navigateTo (url) {
    this.url = url

    LifeCycle.cycle('transition')
  }

  /**
   * Site init
   * @param {Function} done Done function
   */
  siteInit (done) {
    this.initLoader()

    done()

    window.addEventListener('popstate', this.historyStateChanged.bind(this))
  }

  /**
   * Page init
   * @param {Function} done Done function
   */
  pageInit (done) {
    this.bindLinksEvent()

    done()
  }

  /**
   * Init loader
   */
  initLoader () {
    var loader = document.querySelector('[data-lg-loader]')

    if (loader && loader.getAttribute('data-lg-loader') === 'lottie' && typeof lottie === 'object') {
      var animOut = loader.getAttribute('data-lg-loader-out')
      var playerOut = false
      var animIn = loader.getAttribute('data-lg-loader-in')
      var playerIn = false

      if (animOut) {
        playerOut = lottie.loadAnimation({
          container: loader,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: animOut,
          rendererSettings: {
            preserveAspectRatio: 'none'
          }
        })
      }

      if (animIn === 'reverse') {
        animIn = animOut
      }

      if (animIn) {
        playerIn = lottie.loadAnimation({
          container: loader,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: animIn,
          rendererSettings: {
            preserveAspectRatio: 'none'
          }
        })

        if (animIn === animOut) {
          playerIn.setDirection(-1)
        }
      }

      loader.playerOut = playerOut
      loader.playerIn = playerIn
    }
  }

  /**
   * Fetch
   * @param {Function} done Done function
   */
  pageFetch (done) {
    var self = this

    if (this.url) {
      fetch(this.url, { credentials: 'include' })
        .then(function (response) {
          return response.text()
        }).then(function (body) {
          self.pageFetched = body

          done()
        })
    }
  }

  /**
   * Page create
   * @param {Function} done Done function
   */
  pageCreate (done) {
    // Convert data to HTML
    var html = new DOMParser().parseFromString(this.pageFetched, 'text/html')

    // Get containers
    var currentPage = document.querySelector('[data-lg-page]')
    var newPage = html.querySelector('[data-lg-page]')

    if (newPage) {
      // Switch containers
      currentPage.insertAdjacentElement('beforebegin', newPage)

      newPage.style.opacity = 0

      currentPage.style.opacity = 0
      currentPage.style.position = 'absolute'
      currentPage.style.top = 0
      currentPage.style.left = '-999em'
      currentPage.style.width = '100%'

      // Switch classes
      document.querySelector('body').className = html.querySelector('body').className

      // Switch metas
      document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach(element => {
        element.parentNode.removeChild(element)
      })
      html.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach(element => {
        document.querySelector('head title').insertAdjacentElement('afterend', element)
      })

      // Set title
      document.querySelector('head title').innerText = html.querySelector('head title').innerText
    }

    // Reset scroll
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
    window.scrollTop = 0
    window.smoothScrollTop = 0

    done()
  }

  /**
   * Page kill
   * @param {Function} done Done function
   */
  pageKill (done) {
    var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')
    oldPage.parentNode.removeChild(oldPage)

    done()
  }

  /**
   * Page out
   * @param {Function} done Done function
   */
  pageOut (done) {
    var page = document.querySelector('[data-lg-page]')

    if (page) {
      var pageName = page.getAttribute('data-lg-page')
      var transition = false

      if (typeof this.transitions.out[pageName] === 'function') {
        transition = this.transitions.out[pageName]
      } else if (typeof this.transitions.out.default === 'function') {
        transition = this.transitions.out.default
      }

      if (transition) {
        transition(page, done)
      } else {
        var loader = document.querySelector('[data-lg-loader]')

        if (loader) {
          if (loader.playerOut) {
            loader.playerOut.stop()
            loader.playerOut.renderer.svgElement.style.opacity = 1
            loader.playerOut.play()

            loader.playerOut.addEventListener('complete', () => {
              loader.playerOut.renderer.svgElement.style.opacity = ''
              done()
            }, { once: true })
          } else {
            var duration = window.getComputedStyle(document.querySelector('[data-lg-loader]')).getPropertyValue('transition-duration')

            if (duration !== '' && duration !== '0s') {
              loader.addEventListener('transitionend', done, { once: true })
            } else {
              done()
            }
          }

          loader.classList.add('is-visible')
        } else {
          done()
        }
      }
    } else {
      done()
    }

    this.unbindLinksEvent.bind(this)
  }

  /**
   * Page in
   * @param {Function} done Done function
   */
  pageIn (done) {
    var page = document.querySelector('[data-lg-page]')

    if (page) {
      var pageName = page.getAttribute('data-lg-page')
      var transition = false

      page.style.opacity = ''

      if (typeof this.transitions.in[pageName] === 'function') {
        transition = this.transitions.in[pageName]
      } else if (typeof this.transitions.in.default === 'function') {
        transition = this.transitions.in.default
      }

      if (transition) {
        transition(page, done)
      } else {
        var loader = document.querySelector('[data-lg-loader]')

        if (loader && loader.classList.contains('is-visible')) {
          if (loader.playerIn) {
            loader.playerIn.stop()
            loader.playerIn.renderer.svgElement.style.opacity = 1
            if (loader.getAttribute('data-lg-loader-in') === 'reverse') {
              loader.playerIn.goToAndPlay(loader.playerIn.totalFrames, true)
            } else {
              loader.playerIn.play()
            }

            loader.playerIn.addEventListener('complete', () => {
              loader.playerIn.renderer.svgElement.style.opacity = ''
              loader.classList.remove('is-visible')
              done()
            }, { once: true })
          } else {
            var duration = window.getComputedStyle(document.querySelector('[data-lg-loader]')).getPropertyValue('transition-duration')

            if (duration !== '' && duration !== '0s') {
              loader.addEventListener('transitionend', done, { once: true })
            } else {
              done()
            }

            loader.classList.remove('is-visible')
          }
        } else {
          done()
        }
      }
    } else {
      done()
    }
  }

  /**
   * History change
   */
  historyStateChanged () {
    this.navigateTo(window.location.href)
  }

  /**
   * Add transition animation
   * @param {String} type Transition type (in | out)
   * @param {Function} callback Callback function
   * @param {String} pageName Page name
   */
  add (type, callback, pageName = 'default') {
    if (this.transitions[type]) {
      if (this.transitions[type][pageName]) {
        console.log('Transition animation for ' + pageName + ' page already exists.')
      } else {
        this.transitions[type][pageName] = callback
      }
    }
  }
}

export default new Transition()
