const add = function (num1, num2) {
  return (num1 + num2).toFixed(2);
};

const subtract = function (num1, num2) {
  return (num1 - num2).toFixed(2);
};

const multiply = function (num1, num2) {
  return (num1 * num2).toFixed(2);
};

const divide = function (num1, num2) {
  if (num2 == 0) {
    return "NO WAY";
  }
  return (num1 / num2).toFixed(2);
};

const operate = function (num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

let displayNumber = "";

let num2 = 0;
let num1 = 0;
let operator;
const calcDisplay = document.querySelector(".display");
const calcDisplayTxt = calcDisplay.querySelector("p");

// shows displaynumber on screen
const addNumDisplay = function () {
  displayNumber = displayNumber + this.innerHTML;
  calcDisplayTxt.innerText = displayNumber;
  // num1 = parseInt(displayNumber);
  console.log(`curr num: ${displayNumber}`);
};

// makes any number button show up on screen
const numButtons = document.querySelectorAll(".btn-num");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", addNumDisplay);
}

const prepOp = function () {
  if (displayNumber == "") {
    displayNumber = 0;
  }
  console.log("");

  if (operator) {
    num2 = parseInt(displayNumber);
    num1 = operate(num1, operator, num2);
    calcDisplayTxt.innerText = num1;
    displayNumber = "";
  } else {
    num1 = parseInt(calcDisplayTxt.innerText);
    displayNumber = "";
  }
  operator = this.innerHTML;
  // num1 = parseInt(displayNumber);
};

// add operator button functionality
const opButtons = document.querySelectorAll(".operator");
for (let i = 0; i < opButtons.length; i++) {
  opButtons[i].addEventListener("click", prepOp);
}

const calcClear = function () {
  displayNumber = "";
  calcDisplayTxt.innerText = "";
  operator = "";
};

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", calcClear);

const calculate = function () {
  num2 = parseInt(displayNumber);
  displayNumber = operate(num1, operator, num2);
  num1 = parseInt(displayNumber);
  num2 = 0;
  calcDisplayTxt.innerText = displayNumber;
  operator = "";
  displayNumber = "";
};

const equals = document.querySelector(".equals");
equals.addEventListener("click", calculate);
