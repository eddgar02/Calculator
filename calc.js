function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function exponent(n1, n2) {
    return n1 ** n2;
}



function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':

            return divide(num1, num2);
        case '^':
            return exponent(num1, num2);
        default:
            return "Invalid";

    }
}

const display = document.querySelector(".output");
const previous = document.querySelector(".previous");

const buttons = []

for (let i = 0; i <= 9; i++) {
    buttons[i] = document.querySelector("#btn" + i);
}

const acButton = document.querySelector("#ac");
const delButton = document.querySelector("#del");

const expButton = document.querySelector("#exp");
const divButton = document.querySelector("#div");
const mulButton = document.querySelector("#mul");
const subButton = document.querySelector("#sub");
const addButton = document.querySelector("#add");

const decimalButton = document.querySelector("#decimal");
const signButton = document.querySelector("#sign");
const eqButton = document.querySelector("#eq");

let firstNumber = 0;
let secondNumber;
let operator;

let decimalEnabled = false;
let signEnabled = false;
let firstSelected = false;
let secondSelected = false;
let operatorSelected = false;
let gotEqual = false;


//function to format numbers
function formatNumber(num) {
    if (num % 1 !== 0) {
        return parseFloat(num.toFixed(6));
    }
    return num;
}

//clear button
acButton.addEventListener("click", () => {
    display.textContent = "";
    previous.textContent = "";
    firstNumber = 0;
    secondNumber = undefined;
    operator = undefined;

    decimalEnabled = false;
    signEnabled = false;
    firstSelected = false;
    secondSelected = false;
    operatorSelected = false;
});

//event listener for the decimal button
decimalButton.addEventListener("click", () => {

    if (!decimalEnabled && !secondSelected && gotEqual){
        display.textContent ="0.";
        gotEqual =false;
        firstSelected = false;
    }else if (!decimalEnabled && operatorSelected && !secondSelected) {
        display.textContent = '0.';
    } else if (!decimalEnabled) {
        display.textContent += '.';
    } 


    decimalEnabled = true;
});

//function when getting number button events
function getNumber(e) {
    if(display.textContent==="0"){
        display.textContent = "";
    }
    if (firstSelected && !operatorSelected) {
        gotEqual =false;
        firstSelected = false;
        display.textContent = e.target.textContent;
    } else if (!firstSelected) {
        display.textContent += e.target.textContent;
        firstNumber = Number(display.textContent);
    } else if (operatorSelected) {
        if (!secondSelected) {
            if (!decimalEnabled) {
                display.textContent = '';
            }
            secondSelected = true;
        }
        display.textContent += e.target.textContent;
        secondNumber = Number(display.textContent);
    }
}
//getting button events
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", getNumber);
}

function getOperation(op) {
    firstSelected = true;
    decimalEnabled = false;
    operatorSelected = true;
    firstNumber = Number(display.textContent);
    previous.textContent = `${firstNumber} ` + `${op}`;
    operator = op;
}

addButton.addEventListener("click", () => getOperation(addButton.textContent));
subButton.addEventListener("click", () => getOperation(subButton.textContent));
divButton.addEventListener("click", () => getOperation(divButton.textContent));
mulButton.addEventListener("click", () => getOperation(mulButton.textContent));
expButton.addEventListener("click", () => getOperation(expButton.textContent));

function getEqual() {
    if (firstSelected && secondSelected) {
        secondNumber = Number(display.textContent);
        let final = formatNumber(operate(firstNumber, secondNumber, operator));
        previous.textContent = final;
        display.textContent = final;
        firstNumber = final;

        decimalEnabled = false;
        signEnabled = false;
        secondSelected = false;
        operatorSelected = false;

        gotEqual = true;
    }
}

eqButton.addEventListener("click", () => getEqual());


//Adding sign to number
signButton.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (firstNumber !== 0 && !secondSelected) {
        if (!currentContent.startsWith('-')) {
            display.textContent = '-' + currentContent;
        } else {
            display.textContent = Math.abs(Number(display.textContent));
        }
    } else if (firstSelected) {
        if (!currentContent.startsWith('-')) {
            display.textContent = '-' + currentContent;
        } else {
            display.textContent = Math.abs(Number(display.textContent));
        }

    }
});

//Adding delete functionality
delButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
});