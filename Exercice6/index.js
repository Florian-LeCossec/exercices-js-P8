// Sélectionner les éléments de la calculatrice
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// Initialiser les variables
let currentInput = '';
let operator = '';
let previousInput = '';

// Ajouter des écouteurs d'événements aux boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                const result = calculate(parseInt(previousInput), parseInt(currentInput), operator);
                display.textContent = result;
                currentInput = result;
                previousInput = '';
                operator = '';
            }
        } else {
            if (currentInput) {
                if (previousInput) {
                    previousInput = calculate(parseInt(previousInput), parseInt(currentInput), operator);
                    display.textContent = previousInput;
                } else {
                    previousInput = currentInput;
                }
                currentInput = '';
                operator = value;
            }
        }
    });
});

// Fonction de calcul
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Division by zero is not allowed';
            }
            return num1 / num2;
        default:
            return 0;
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}
