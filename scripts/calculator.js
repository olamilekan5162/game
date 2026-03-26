const inputs = document.querySelector(".inputs");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

currentNumber = "";
const operators = ["+", "-", "/", "*", "%"];
let numberArray = [];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    inputs.textContent += e.target.textContent;
    currentNumber += e.target.textContent;

    if (operators.includes(e.target.textContent)) {
      numberArray.push(currentNumber.slice(0, -1));
      currentNumber = "";
      numberArray.push(e.target.textContent);
    }

    if (e.target.textContent === "Ac") {
      inputs.textContent = "";
      result.textContent = "0";
      currentNumber = "";
      numberArray = [];
    }
    if (e.target.textContent === "C") {
      inputs.textContent = inputs.textContent.slice(0, -2);
      currentNumber = currentNumber.textContent.slice(0, -2);
    }

    if (e.target.textContent === "=") {
      inputs.textContent = inputs.textContent.slice(0, -1);
      numberArray.push(currentNumber.slice(0, -1));
      const solve = mainLogic();
      result.textContent = solve;
      currentNumber = "";
      numberArray = [];
    }
  });
});

const mainLogic = () => {
  let finalResult = 0;
  let nextNumber = 0;
  let nextOperator = "+";

  for (let i of numberArray) {
    const isOperator = operators.some((ops) => {
      return ops.includes(i);
    });
    if (!isOperator) {
      nextNumber = +i;
      const result = doTheMath(finalResult, nextNumber, nextOperator);
      finalResult = result;
    }
    if (isOperator) {
      nextOperator = i;
    }
  }
  return finalResult;
};

const doTheMath = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return Number(number1) + Number(number2);

    case "-":
      return Number(number1) - Number(number2);

    case "/":
      return Number(number1) / Number(number2);

    case "*":
      return Number(number1) * Number(number2);

    case "%":
      return Number(number1) % Number(number2);

    default:
      return 0;
  }
};

// const justNameItAnyFunction = () => {
//   const operators = ["+", "-", "/", "*", "%"];
//   const arr = [6, "+", "-", 4, "+", 5];

//   let finalResult = 0;
//   let nextNumber = 0;
//   let nextOperator = "+";

//   for (let i of arr) {
//     const isOperator = operators.some((ops) => {
//       return ops.includes(i);
//     });
//     if (!isOperator) {
//       nextNumber = +i;
//       const result = solve(finalResult, nextNumber, nextOperator);
//       console.log("result", result);
//       finalResult = result;
//     }
//     if (isOperator) {
//       nextOperator = i;
//     }
//     console.log("finalResult", finalResult);
//     console.log("nextNumber", nextNumber);
//   }
//   console.log(finalResult);
// };

// const solve = (number1, number2, operator) => {
//   if (operator === "+") return number1 + number2;
//   if (operator === "-") return number1 - number2;
//   if (operator === "+") return number1 + number2;
//   if (operator === "/") return number1 / number2;
// };

// justNameItAnyFunction();
