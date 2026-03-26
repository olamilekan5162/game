const form = document.getElementById("formOne");
const input = document.getElementById("inputOne");

const callback = function (event) {
  event.preventDefault();

  const userInput = input.value;

  console.log(userInput);

  let arrayOfString = userInput.split(",");

  let arrayOfNumber = [];

  for (i = 0; i < arrayOfString.length; i++) {
    // arrayOfNumber[i] = Number(arrayOfString[i])
    arrayOfNumber[i] = +arrayOfString[i];
  }

  console.log(arrayOfNumber);

  // let arrayOfNumber = arrayOfString.map(function (element){
  //     return Number(element);
  // })

  // console.log(arrayOfNumber)
};

form.addEventListener("submit", callback);
