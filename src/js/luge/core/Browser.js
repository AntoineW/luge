import Bowser from 'bowser'

class Browser {
  /**
   * Constructor
   */
  constructor () {
    // Browser detect
    const browser = Bowser.getParser(window.navigator.userAgent)

    // Platform type class
    document.documentElement.classList.add('is-' + browser.getPlatformType())

    if (browser.is('mobile') || browser.is('tablet')) {
      document.documentElement.classList.add('is-handheld')
    }

    // Browser class
    if (browser.is('Safari')) {
      document.documentElement.classList.add('is-safari')
      document.documentElement.classList.add('is-safari-' + browser.getBrowserVersion())
    }

    this.bowser = browser
  }
}

export default new Browser()
