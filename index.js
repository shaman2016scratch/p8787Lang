const scriptsPath = '/js'
const pathRunner = "/play"
const pathVm = "/vm"
const pathUI = "/ui"
const pathToPage = 'https://shaman2016scratch.github.io/p8787Lang'

async function start() {
  const LanguageVM = await (await fetch(`${pathToPage}${scriptsPath}${pathVm}/index.js`)).text()
  const LanguageRunner = await (await fetch(`${pathToPage}${scriptsPath}${pathRunner}/index.js`)).text()
  const RunnerUI = await (await fetch(`${pathToPage}${scriptsPath}${pathUI}/index.js`)).text()
  let functions = {
    vm: new Function(['params'], LanguageVM),
    runner: new Function(['params'], LanguageRunner),
    ui: new Function(['params'], RunnerUI)
  }
}
