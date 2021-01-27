import 'whatwg-fetch'
import Actions from 'Luge/Actions'

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

    Actions.add('siteInit', this.siteInit.bind(this))
    Actions.add('pageInit', this.pageInit.bind(this))
    Actions.add('pageFetch', this.pageFetch.bind(this))
    Actions.add('pageOut', this.pageOut.bind(this))
    Actions.add('pageIn', this.pageIn.bind(this))
    Actions.add('pageCreate', this.pageCreate.bind(this))
    Actions.add('pageKill', this.pageKill.bind(this), 999)
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

    Actions.flow('transition')
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
      var pageName = page.getAttribute('data-lg-page')
      var transition = false

      window.scroll(0, 0)
      window.smoothScrollTop = 0

      if (typeof this.transitions.out[pageName] === 'function') {
        transition = this.transitions.out[pageName]
      } else if (typeof this.transitions.out.default === 'function') {
        transition = this.transitions.out.default
      }

      if (transition) {
        transition(page, done)
      } else {
        page.style.transition = 'opacity 0.3s linear !important'
        setTimeout(() => { page.style.opacity = 0 }, 10)

        setTimeout(() => {
          page.style.transition = ''
          page.style.opacity = ''

          done()
        }, 300)
      }
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
      var pageName = page.getAttribute('data-lg-page')
      var transition = false

      if (typeof this.transitions.in[pageName] === 'function') {
        transition = this.transitions.in[pageName]
      } else if (typeof this.transitions.in.default === 'function') {
        transition = this.transitions.in.default
      }

      if (transition) {
        transition(page, done)
      } else {
        page.style.transition = 'opacity 0.3s linear !important'
        setTimeout(() => { page.style.opacity = 1 }, 10)

        setTimeout(() => {
          page.style.transition = ''
          page.style.opacity = ''

          done()
        }, 300)
      }
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
   * Page kill
   */
  pageKill (done) {
    var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]')
    oldPage.parentNode.removeChild(oldPage)

    done()
  }

  /**
   * History change
   */
  historyStateChanged () {
    this.navigateTo(window.location.href)
  }

  /**
   * Add transition animation
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
