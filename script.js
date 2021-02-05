function divide(a, b) {
    if (b == 0) {
        alert("HEY! THAT'S ILLEGAL!");
        location.reload();
        return;
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

function exceedsDisplay() {
    if (screen.textContent.length > 20) {
        alert("Display has reached its maximum size.");
        console.log(screen.textContent);
        location.reload();
    }
}

const buttons = document.querySelectorAll("button");
var screen = document.getElementById("screen");
var num1 = "";
var num2 = "";
var answer;
var operatorChosen;
var operatorFlag;
var equalsFlag;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        exceedsDisplay();
        for (i = 0; i < 10; i++) {
            if (equalsFlag && button.id == i) {
                screen.textContent = i;
                equalsFlag = false;
            }
            else if (button.id == i) {
                screen.textContent += i;
            }
            if (operatorFlag && button.id == 0) {
                screen.textContent = 0;

            }
            else if (operatorFlag) {
                screen.textContent = null;

            }
            operatorFlag = false;
        }
        switch (button.id) {
            case '/':
            case 'x':
            case '-':
            case '+':
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
                break;
            case 'clear':
                num1 = null;
                num2 = null;
                operatorChosen = null;
                screen.textContent = null;
                operatorFlag = false;
                break;
            case 'equal':
                num2 = parseFloat(screen.textContent);
                screen.textContent = +operate(num1, num2, operatorChosen).toFixed(3);
                num1 = +operate(num1, num2, operatorChosen).toFixed(3);
                num2 = null;
                operatorChosen = null;
                equalsFlag = true;
                break;
            case 'delete':
                screen.textContent = screen.textContent.slice(0, -1);
                break;
            case 'decimal':
                if (!screen.textContent.includes(".")) {
                    screen.textContent += ".";
                }
        }
    })
})

