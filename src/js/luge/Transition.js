import 'whatwg-fetch'
const emitter = require('tiny-emitter/instance')

export default class Transition {
  /**
   * Constructor
   */
  constructor () {
    this.url = window.location.href
    this.pageFetched = null

    this.listeners = { linkHandler: this.linkHandler.bind(this) }

    this.wait = {
      fetch: true,
      out: true
    }

    window.lg.Core.addAction('siteInit', this.siteInit.bind(this))
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this))
    window.lg.Core.addAction('pageFetch', this.pageFetch.bind(this))
    window.lg.Core.addAction('pageOut', this.pageOut.bind(this))
    window.lg.Core.addAction('pageIn', this.pageIn.bind(this))
    window.lg.Core.addAction('pageCreate', this.pageCreate.bind(this))
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
   */
  navigateTo (url) {
    this.url = url

    this.wait.fetch = true
    this.wait.out = true

    window.lg.Core.wait.transition = {
      fetch: true,
      out: true
    }

    window.lg.Core.doAction('pageFetch')
    window.lg.Core.doAction('pageOut')
  }

  /**
   * Site init
   */
  siteInit (done) {
    done()

    window.addEventListener('popstate', this.historyStateChanged.bind(this))
  }

  /**
   * Page init
   */
  pageInit (done) {
    this.bindLinksEvent()

    done()
  }

  /**
   * Fetch
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
   * Page out
   */
  pageOut (done) {
    var page = document.querySelector('[data-lg-page]')

    if (page) {
      window.scroll(0, 0)
      window.smoothScrollTop = 0

      page.style.transition = 'opacity 0.3s linear !important'
      setTimeout(() => { page.style.opacity = 0 }, 10)

      setTimeout(() => {
        page.style.transition = ''
        page.style.opacity = ''

        done()
      }, 300)
    } else {
      done()
    }

    this.unbindLinksEvent.bind(this)
  }

  /**
   * Page in
   */
  pageIn (done) {
    var page = document.querySelector('[data-lg-page]')

    if (page) {
      page.style.transition = 'opacity 0.3s linear !important'
      setTimeout(() => { page.style.opacity = 1 }, 10)

      setTimeout(() => {
        page.style.transition = ''
        page.style.opacity = ''

        done()
      }, 300)
    } else {
      done()
    }
  }

  /**
   * Page create
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

    done()
  }

  /**
   * History change
   */
  historyStateChanged () {
    this.navigateTo(window.location.href)
  }
}
