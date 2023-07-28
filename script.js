function affichage () {
    let screen = document.querySelector(".affichage");
    screen.innerHTML = "";
    const buttons = document.querySelectorAll('button');
    let firstNumber ='';
    let secondNumber = '';
    let operator = '';
    let lastInputIsOperator = false;
    let tour = 0;
    let float = false;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent === '0' || button.textContent === '1' || button.textContent === '2' || button.textContent === '3' || button.textContent === '4' || button.textContent === '5' || button.textContent === '6' || button.textContent === '7' || button.textContent === '8' || button.textContent === '9') {
                screen.textContent += button.textContent;
                if (tour === 0) {
                    firstNumber += button.textContent;
                } else if (operator === '/' && button.textContent === '0'){
                    screen.textContent = 'ERROR';
                } else {
                    secondNumber += button.textContent;
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '=') {
                screen.textContent += ' = ';
                screen.textContent = `${operate(firstNumber, secondNumber, operator)}`;
                lastInputIsOperator = false;
                firstNumber = '';
                secondNumber = '';
                operator = '';
                tour = 0;
            } else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
                if (tour === 0) {
                    screen.textContent += ` ${button.textContent} `;
                    operator = button.textContent;
                    lastInputIsOperator = true;
                    tour++;
                    float = false;
                } else if (lastInputIsOperator === false) {
                    screen.textContent += ` ${button.textContent} `;
                    operator = button.textContent;
                    lastInputIsOperator = true;
                    firstNumber = operate(firstNumber, secondNumber, operator).toString();
                    secondNumber = '';
                }
            } else if (button.textContent === '.') {
               if (float === false) {
                screen.textContent += `${button.textContent}`;
                float = true;
                if (tour === 0) {
                    firstNumber += '.';
                } else {
                    secondNumber += '.';
                }
               }
            } else if (button.textContent === 'Delete') {
                if (lastInputIsOperator === true) {
                    lastInputIsOperator = false;
                    screen.textContent = (screen.textContent).slice(0, -1);
                    screen.textContent = (screen.textContent).slice(0, -1);
                    screen.textContent = (screen.textContent).slice(0, -1);
                    operator = '';
                    tour = 0;
                } else if (float === true) {
                    float = false;
                    if (tour === 0) {
                        firstNumber = firstNumber.slice(0, -1);
                        console.log(firstNumber);
                        screen.textContent = (screen.textContent).slice(0, -1);
                    } else {
                        secondNumber = secondNumber.slice(0, -1);
                    }
                } else if (tour === 0) {
                    firstNumber = firstNumber.slice(0, -1);
                    screen.textContent = (screen.textContent).slice(0, -1);
                } else {
                    secondNumber= secondNumber.slice(0, -1);
                    screen.textContent = (screen.textContent).slice(0, -1);
                }
            } else {
                screen.innerHTML = "";
                firstNumber = '';
                secondNumber = '';
                operator = '';
                tour = 0;
            }
        });
        
    }
)};


function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (firstNumber, secondNumber, operator) {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

affichage()