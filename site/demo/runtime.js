const params = new URLSearchParams(location.search)
document.body.classList.toggle('is-embedded', params.has('embed'))
const library = await import(params.has('baseline') ? '/baseline/js/luge.modern.js' : '/lib/js/luge.modern.js')
const luge = new library.Luge()
if (params.has('manual')) {
  document.querySelectorAll('[data-lg-reveal]').forEach(element => { element.dataset.lgRevealManual = '' })
}
window.luge = luge
window.demoEvents = []
window.demoReady = false
const plugins = { preloader: 'Preloader', reveal: 'Reveal', transition: 'Transition', scroll: 'ScrollAnimation', smooth: 'SmoothScroll', cursor: 'Cursor', intersection: 'Intersection', lottie: 'LottiePlayer', mouse: 'MouseAnimation', parallax: 'Parallax', browser: 'Browser' }
for (const key of document.body.dataset.plugins.split(' ')) luge.addPlugin(key, library[plugins[key]])
const settings = { credits: { show: false }, ticker: { external: params.has('external') } }
if (params.has('disabled')) settings[params.get('disabled')] = { disabled: true }
luge.settings(settings)
if (params.has('external')) {
  const tick = time => { luge.ticker.tick(time); requestAnimationFrame(tick) }
  requestAnimationFrame(tick)
}
const phases = ['SiteInit', 'PageInit', 'SiteLoad', 'PageLoad', 'SiteIn', 'PageIn', 'Reveal', 'PageFetch', 'PageOut', 'PageCreate', 'PageKill', 'SiteReload']
for (const phase of phases) {
  for (const timing of ['before', 'after']) {
    const name = timing + phase
    luge.emitter.on(name, () => {
      window.demoEvents.push(name)
      const output = document.querySelector('#events')
      if (output) output.textContent = window.demoEvents.slice(-60).join('\n')
    })
  }
}
luge.emitter.on('afterReveal', () => { window.demoReady = true })
if (luge.reveal) {
  luge.reveal.add('in', 'custom', element => { element.style.background = '#f56e59' })
}
document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]')?.dataset.action
  if (action === 'manual') {
    const element = document.querySelector('#manual')
    element.luge.reveal[element.classList.contains('is-in') ? 'out' : 'in']()
  }
  if (action === 'refresh') luge.lifecycle.refresh()
  if (['play', 'pause', 'stop'].includes(action)) {
    const player = document.getElementById(event.target.closest('[data-player]').dataset.player)
    player?.[action]?.()
  }
  if (action === 'insert') {
    document.querySelector('#dynamic').insertAdjacentHTML('beforeend', '<div class="demo-block" data-lg-reveal="fade">Dynamically inserted</div>')
    luge.emitter.emit('update')
  }
})
// Readouts show the values produced by the plugins, without driving their motion.
luge.ticker.add(() => {
  const progress = document.querySelector('[data-readout="progress"]')
  if (progress) progress.textContent = `${Math.round(Number(progress.parentElement.style.getPropertyValue('--progress')) * 100)}%`
  const mouse = document.querySelector('[data-readout="mouse"]')
  const position = document.querySelector('#mouse')?.luge?.mouse
  if (mouse && position) mouse.textContent = `X ${Math.round(position.progressX * 100)}% / Y ${Math.round(position.progressY * 100)}%`
})
if (document.body.dataset.demo === 'browser') {
  const values = { name: luge.browser.getBrowserName(), version: luge.browser.getBrowserVersion(), platform: luge.browser.getPlatformType(), os: luge.browser.getOSName() }
  document.querySelectorAll('[data-browser]').forEach(element => { element.textContent = values[element.dataset.browser] || 'Unknown' })
}
luge.init()
