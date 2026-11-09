import Bowser from 'bowser/src/bowser.js'

export default class Browser {
  /**
   * Constructor
   */
  constructor (luge) {
    const documentElement = document.documentElement

    // Browser detect
    const browser = Bowser.getParser(window.navigator.userAgent)

    // Platform type class
    documentElement.classList.add('is-' + browser.getPlatformType())

    if (browser.is('mobile') || browser.is('tablet')) {
      documentElement.classList.add('is-handheld')
    }

    // Browser class
    if (browser.is('Safari')) {
      documentElement.classList.add('is-safari')
      documentElement.classList.add('is-safari-' + browser.getBrowserVersion())
    }

    luge.browser = browser
  }
}
