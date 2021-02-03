function divide(a, b) {
    if (b == 0){
        alert("HEY! THAT'S ILLEGAL!");
        location.reload();
        return ;
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function operate(a, b, operator) {
    if (operator == "/") {
        return divide(a, b);
    }
    else if (operator == "x") {
        return multiply(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "+") {
        return add(a, b);
    }
}

const buttons = document.querySelectorAll("button");
var screen = document.getElementById("screen");
var num1 = "";
var num2 = "";
var answer;
var operatorChosen;
var operatorFlag;
var equalsFlag = false

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        for (i = 0; i < 10; i++) {
            if (button.id == i) {
                screen.textContent += i;
            }
            if (operatorFlag && button.id == 0) {
                screen.textContent = 0;
                
            }
            else if(operatorFlag){
                screen.textContent = null;
            }
            operatorFlag = false;
        }
    

        if (button.id == "/" || button.id == "x" || button.id == "-" || button.id == "+") {
            if (operatorChosen == null) {
                num1 = parseFloat(screen.textContent);
            }
            else {
                num2 = parseFloat(screen.textContent);
                screen.textContent = +operate(num1, num2, operatorChosen).toFixed(3);
                num1 = operate(num1, num2, operatorChosen);
            }
            operatorChosen = button.id;
            operatorFlag = true;
        }

        if (button.id == "clear") {
            num1 = null;
            num2 = null;
            operatorChosen = null;
            screen.textContent = null;
            operatorFlag = false;
        }

        if (button.id == "=") {
            num2 = parseFloat(screen.textContent);
            screen.textContent = +operate(num1, num2, operatorChosen).toFixed(3);
            console.log(num1 + operatorChosen + num2);
            num1 = null;
            num2 = null;

        }
        
        if(button.id == "." && !screen.textContent.includes(".")){
            screen.textContent += ".";
        }

        if(button.id == "delete"){
            screen.textContent = screen.textContent.slice(0,-1);
        }
            
    })
})

