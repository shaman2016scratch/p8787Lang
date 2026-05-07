async function COMPILER() {
  let exported = {}
  async function compile(code) {
    let compiled = {
      code: []
    }
    let i = code.split('\n')
    for(let i2 = 0; i2 < i.length; i2++) {
      let compiledLine = {}
      let i3 = i[i2]
      let i4 = i3.split(' ')
      if (i4[0] === 'load') {
        compiledLine = {
          operation: 'load',
          item: i4[1],
          value: i4[2]
        }
      }
      compiled.code.push(compiledLine)
    }
    return compiled
  }
  exported = {
    compile
  }
  return exported
}
return COMPILER()
