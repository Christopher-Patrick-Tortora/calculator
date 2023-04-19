import { Calculator } from "./Calculator.mjs"

const UI = () => {
 
    const buttonListener = () => {
        const buttons = document.querySelectorAll('button')
        const answer = document.querySelector('.answer')
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
        
            })
        })
    }

    return { buttonListener }

}

export { UI }