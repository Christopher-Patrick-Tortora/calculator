import { Calculator } from "./Calculator.mjs"

const UI = () => {
    const calculator = Calculator()
    const arithmetic = document.querySelector('.arithmetic')

    const del = () => {
        arithmetic.textContent = arithmetic.textContent.substring(0, arithmetic.textContent.length - 1)
    }

    const allClear = () => {
        arithmetic.textContent = ''
    }

    const buttonListener = () => {
        const buttons = document.querySelectorAll('button')
        let operand = ''
        let operator
        
        const answer = document.querySelector('.answer')
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if(button.classList.contains('operand')){
                    operand += button.id
                    arithmetic.textContent += button.id
                    
                } 
                else if(button.classList.contains('operator')){
                    if(arithmetic.textContent){
                        arithmetic.textContent += button.id
                        calculator.pushInput(operand)
                        calculator.pushInput(button.id)
                        operand = ''
                    }
                    else {
                        answer.textContent = 'Invalid format used'
                    }


                }
                else if(button.id === 'ac'){
                    allClear()
                    calculator.allClear()
                }
                else if(button.id === 'del'){
                    del()
                
                }
        
            })
        })
    }

    return { buttonListener }

}

export { UI }