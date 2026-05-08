async function COMPILER() {
  let exported = {}
  async function compile(code) {
    let compileOperator = (operator) => { console.log('error') }
    compileOperator = (operator) => {
      let i = JSON.parse(operator)
      if (i.command === 'ram.element.get') {
        return {
          operator: i.command,
          values: i.params
        }
      } else if (i.command === 'text') {
        return i.content
      } else if (i.command === 'join') {
        return {
          operator: 'join',
          values: [
            i.element1,
            i.element2
          ]
        }
      }
    }
    let compiled = {
      code: []
    }
    let i = code.split('\n')
    for(let i2 = 0; i2 < i.length; i2++) {
      let compiledLine = {}
      let i3 = i[i2]
      let i4 = i3.split(' ')
      if (i4[0] === 'load') {
        const valueResult = await compileOperator(i4[2])
        compiledLine = {
          operation: 'load',
          item: i4[1],
          value: valueResult
        }
      } else if (i4[0] === 'save') {
        const valueResult = await compileOperator(i4[2])
        compiledLine = {
          operation: 'save',
          item: i4[1],
          byte: valueResult
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
