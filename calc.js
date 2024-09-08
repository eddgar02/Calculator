function add(n1, n2){
    return n1+n2;
}

function subtract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
}

function exponent(n1,n2){
    return n1 ** n2;
}



function operate(num1,num2,op){
    switch(op){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        case '^':
            return exponent(num1,num2);
        default:
            return "Invalid";

    }
}

const display = document.querySelector(".output");
const previous = document.querySelector(".previous");

const buttons = []

for(let i = 0; i <=9; i++){
      buttons[i] = document.querySelector("#btn"+i);
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

let firstNumber =0;
let secondNumber;
let operator;

let decimalEnabled = false;
let signEnabled = false;


//clear button
acButton.addEventListener("click", () => {
    display.textContent="";
    previous.textContent="";
});
