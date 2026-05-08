async function VM() {
  let exported = {}
  const metadata = {
    name: 'VM8787_1',
    version: '0.0.1',
    developers: [
      {
        name: 'polzovatel_8787',
        links: []
      }
    ],
    license: 'MIT License',
    description: ''
  }
  const compiler = await (await fetch(``)).json()
  let VMFunctions = {}
  exported = {
    metadata
  }
  return {
    export: exported
  }
}
return VM()
