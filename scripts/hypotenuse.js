const inputs = document.querySelectorAll(".inputs");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function sumOfSquares(a, b) {
  var result = a ** 2 + b ** 2;
  return result;
}

function calculateHypotenuse() {
  let answer1 = sumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
  output.innerText = "The length of hypotenuse is " + Math.sqrt(answer1);
}

checkButton.addEventListener("click", calculateHypotenuse);
