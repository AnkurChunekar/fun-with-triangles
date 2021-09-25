const inputs = document.querySelectorAll(".angle");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function calculateSum(angle1, angle2, angle3) {
  var sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {

  if (inputs[0].value && inputs[1].value && inputs[2].value !== "") {
    var result = calculateSum(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
  
    if (result === 180) {
      output.innerText = "yaay! the angles form a perfect Triangle.";
    } else {
      output.innerText = "Opps, These angles do not form Triangle.";
    }
  } else {
    output.innerText = "please enter valid values";
  }

}

button.addEventListener("click", isTriangle);

