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

let firstNumber;
let secondNumber;
let operator;

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
        default:
            return "Invalid";

    }
}