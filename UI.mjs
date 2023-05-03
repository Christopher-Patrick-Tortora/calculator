import { Calculator } from "./Calculator.mjs"

const UI = () => {
    const calculator = Calculator()
    let operator = '';
    let operand1 = '';
    let operand2 = '';


    const buttonListener = () => {
        const buttons = document.querySelectorAll('button')
        const answer = document.querySelector('.answer')
        const arithmetic = document.querySelector('.arithmetic')
        buttons.forEach(button => {
            button.addEventListener('click', () => {

                if (button.classList.contains('operand')) {
                    if(button.id === '.' && !answer.textContent.includes('.')
                    && answer.textContent.length > 0){
                        answer.textContent += '.'
                    }
                    else if(button.id !== '.'){
                        answer.textContent += button.id
                    }
                }
                else if (button.classList.contains('operator')) {
                    if(!answer.textContent){

                    }
                    else if (operator === '') {
                        operator = button.id
                        operand1 = answer.textContent
                        arithmetic.textContent = answer.textContent + button.id
                        answer.textContent = ''
                    }
                    else {
                        operator = button.id
                        operand1 = answer.textContent.includes('=') ?
                            answer.textContent.slice(1) : answer.textContent
                        arithmetic.textContent = operand1 + button.id
                        answer.textContent = ''
                    }
                }
                else if (button.classList.contains('operate')) {
                    if(!answer.textContent){

                    }
                    else{
                        operand2 = answer.textContent
                        arithmetic.textContent += answer.textContent
                        answer.textContent = '=' + calculator.operate(operator, Number(operand1), Number(operand2))
    
                        operand1 = ''
                        operand2 = ''
                    }
                    
                }
                else if (button.id === 'ac') {
                    arithmetic.textContent = ''
                    answer.textContent = ''

                    operator = '';
                    operand1 = '';
                    operand2 = '';


                }
                else if (button.id === 'del') {
                    if(answer.textContent.includes('-') && answer.textContent.length === 2) {
                        answer.textContent = ''
                    }
                    else if (arithmetic.textContent === '') {
                        answer.textContent = answer.textContent.slice(0, answer.textContent.length - 1)
                    }
                    else if (answer.textContent === '' && !Number(arithmetic.textContent)) {
                        arithmetic.textContent = arithmetic.textContent.slice(0, arithmetic.textContent.length - 1)
                        answer.textContent = arithmetic.textContent
                        arithmetic.textContent = ''
                    }
                    else if (answer.textContent && arithmetic.textContent) {
                        if(answer.textContent.includes('=')){
                            arithmetic.textContent = ''
                            answer.textContent = answer.textContent.slice(1, answer.textContent.length - 1)


                        }
                        else{
                            answer.textContent = answer.textContent.slice(0, answer.textContent.length - 1)

                        }
                        
                    }

                }
                else if (button.id === '+/-') {
                    if (answer.textContent.includes('=')) {
                        if (answer.textContent.includes('-')) {
                            answer.textContent = answer.textContent.slice(2)
                            arithmetic.textContent = ''
                        }
                        else {
                            answer.textContent = `-${answer.textContent.slice(1)}`
                            arithmetic.textContent = ''
                        }
                    }
                    else if (answer.textContent.includes('-')) answer.textContent = answer.textContent.slice(1)
                    else if (answer.textContent !== '') answer.textContent = `-${answer.textContent}`
                }

            })
        })
    }

    return { buttonListener }

}

export { UI }