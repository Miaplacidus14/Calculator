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
            if (button.textContent === '0') {
                screen.textContent += '0';
                if (tour === 0) {
                    firstNumber += '0';
                } else if (operator === '/'){
                    screen.textContent = 'ERROR';
                } else {
                    secondNumber += '0';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '1') {
                screen.textContent += '1';
                if (tour === 0) {
                    firstNumber += '1';
                } else {
                    secondNumber += '1';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '2') {
                screen.textContent += '2';
                if (tour === 0) {
                    firstNumber += '2';
                } else {
                    secondNumber += '2';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '3') {
                screen.textContent += '3';
                if (tour === 0) {
                    firstNumber += '3';
                } else {
                    secondNumber += '3';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '4') {
                screen.textContent += '4';
                if (tour === 0) {
                    firstNumber += '4';
                } else {
                    secondNumber += '4';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '5') {
                screen.textContent += '5';
                if (tour === 0) {
                    firstNumber += '5';
                } else {
                    secondNumber += '5';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '6') {
                screen.textContent += '6';
                if (tour === 0) {
                    firstNumber += '6';
                } else {
                    secondNumber += '6';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '7') {
                screen.textContent += '7';
                if (tour === 0) {
                    firstNumber += '7';
                } else {
                    secondNumber += '7';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '8') {
                screen.textContent += '8';
                if (tour === 0) {
                    firstNumber += '8';
                } else {
                    secondNumber += '8';
                }
                lastInputIsOperator = false;
            } else if (button.textContent === '9') {
                screen.textContent += '9';
                if (tour === 0) {
                    firstNumber += '9';
                } else {
                    secondNumber += '9';
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