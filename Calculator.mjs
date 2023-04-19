const Calculator = () => {
    const input = []
    const operands = []
    const operators = []

    const pushInput = (value) => {
        input.push(value)
        console.log(input)
    }

    const getInput = () => input

    const allClear = () => {
        input.length = 0
        console.log(input)

    }

    const del = () => {
        console.log(input.length)
        const operators = ['(', ')', '/', '-', '+']
        if(operators.includes(input[input.length - 1])) {
            input.pop()
        }
        else{
            let number = input[input.length - 1]
            if(number && number.length > 1){
                console.log('test1')

                number = number.substring(0 , number.length - 1)
                input.pop()
                input.push(number)
            }
            else if(input.length === 1) {
                console.log('test2')
                input.pop()
            }
            else{
                console.log('test3')

                input.pop()
            }

        }
        console.log(input)
        

    }

    

    return { pushInput, allClear, del, getInput }
}

export { Calculator }