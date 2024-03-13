let currentNumber = "";
let previousNumber = "";
let operator = "";

function display(value) {
  if (value === "del") {
    currentNumber = currentNumber.slice(0, -1);
  } else if (value === ".") {
    if (!currentNumber.includes(".")) {
      currentNumber += value;
    }
  } else if (value === "00") {
    currentNumber += "00";
  } else {
    currentNumber += value;
  }
  document.getElementById("result").innerHTML = currentNumber;
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").innerHTML = "0";
}

function calculate() {
  if (operator === "") {
    return;
  }

  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);

  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid operator";
  }
  previousNumber = result;
  currentNumber = "";
  operator = "";
  document.getElementById("result").innerHTML = result;
}

function setOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setOperator(button.innerText);
  });
});
