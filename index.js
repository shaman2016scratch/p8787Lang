const scriptsPath = '/js'
const pathRunner = "/play"
const pathVm = "/vm"
const pathUI = "/ui"
const pathToPage = 'https://shaman2016scratch.github.io/p8787Lang'

async function start() {
  const LanguageVM = await (await fetch(`${pathToPage}${scriptsPath}${pathVm}/index.js`)).json()
  const LanguageRunner = await (await fetch(`${pathToPage}${scriptsPath}${pathRunner}/index.js`)).json()
  const RunnerUI = await (await fetch(`${pathToPage}${scriptsPath}${pathUI}/index.js`)).json()
}
