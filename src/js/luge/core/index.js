import LifeCycle from './LifeCycle'
import Core from './Core'
import Emitter from './Emitter'
import ViewportObserver from './ViewportObserver'
import MouseObserver from './MouseObserver'
import ScrollObserver from './ScrollObserver'
import Ticker from './Ticker'

class Luge {
  plugins = {}

  constructor() {
    this.emitter = {
      emit: Emitter.emit.bind(Emitter),
      off: Emitter.off.bind(Emitter),
      on: Emitter.on.bind(Emitter),
      once: Emitter.once.bind(Emitter)
    }

    this.viewportobserver = {
      add: ViewportObserver.add.bind(ViewportObserver),
      remove: ViewportObserver.remove.bind(ViewportObserver)
    }

    this.lifecycle = {
      add: LifeCycle.add.bind(LifeCycle),
      refresh: LifeCycle.cycle.bind(LifeCycle, 'refresh'),
      remove: LifeCycle.remove.bind(LifeCycle),
      debug: LifeCycle.enableDebug.bind(LifeCycle),
      _cycle: LifeCycle.cycle.bind(LifeCycle)
    }

    this.mouseobserver = {
      add: MouseObserver.add.bind(MouseObserver),
      remove: MouseObserver.remove.bind(MouseObserver)
    }

    this.scrollobserver = {
      add: ScrollObserver.add.bind(ScrollObserver),
      remove: ScrollObserver.remove.bind(ScrollObserver)
    }

    this.ticker = {
      add: Ticker.add.bind(Ticker),
      nextTick: Ticker.nextTick.bind(Ticker),
      remove: Ticker.remove.bind(Ticker),
      tick: Ticker.tick.bind(Ticker)
    }

    // TODO!: rename to setSettings
    this.settings = Core.setSettings.bind(Core)
  }

  init() {
    // Site init on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', LifeCycle.cycle('load'), { once: true })
    } else {
      this.ticker.nextTick(() => {
        LifeCycle.cycle('load')
      },
      null)
    }
  }

  addPlugin(key, Plugin) {
    this.plugins[key] = new Plugin(this)
  }

  get _settings() {
    return Core.settings
  }
}

export default Luge
