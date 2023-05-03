const Calculator = () => {

    const add = (operand1, operand2) => String(operand1 + operand2);

    const subtract = (operand1, operand2) => String(operand1 - operand2);

    const multiply = (operand1, operand2) => String(operand1 * operand2);

    const divide = (operand1, operand2) => String(operand1 / operand2);

    const percent = (operand1, operand2) => String(operand2 * (operand1 / 100));

    const operate = (operator, operand1, operand2) => {
        if(operator === '+') return add(operand1, operand2);
        else if(operator === '-') return subtract(operand1, operand2);
        else if(operator === '×') return multiply(operand1, operand2);
        else if(operator === '÷') return divide(operand1, operand2);
        else if (operator === '%') return percent(operand1, operand2);
    };

    return { operate };
}

export { Calculator };