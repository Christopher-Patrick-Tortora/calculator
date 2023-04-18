const Calculator = () => {
    const input = []
    const operands = []
    const operators = []

    const pushInput = (value) => {
        input.push(value)
        console.log(input)
    }

    const allClear = () => {
        input.length = 0
    }

    const del = () => {
      
    }

    

    return { pushInput, allClear }
}

export { Calculator }