const resultDisplay = document.getElementById('result');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (['+', '−', '×', '÷', '^', '%'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (value === '=') {
            currentInput = calculate(previousInput, currentInput, operator);
            operator = '';
        } else if (value === 'AC') {
            currentInput = '0';
            previousInput = '';
            operator = '';
        } else {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        updateDisplay(currentInput);
    });
});

function calculate(firstValue, secondValue, operator) {
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '−':
            result = a - b;
            break;
        case '×':
            result = a * b;
            break;
        case '÷':
            result = a / b;
            break;
        case '^':
            result = Math.pow(a, b);
            break;
        case '%':
            result = a % b;
            break;
    }
    return result.toString();
}

function updateDisplay(value) {
    resultDisplay.innerText = value;
}
