const inputs = document.querySelectorAll(".angle");
const button = document.querySelector("#button");
const output = document.querySelector("#output");


function calculateSum(angle1, angle2, angle3) {
var sum = angle1 + angle2 + angle3;
return sum;
}

function isTriangle () {
var result = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

if (result === 180) {
    output.innerText = ("yaay! the angles form a perfect Triangle.");
} else {
    output.innerText = ("Opps, These angles do not form Triangle.");
}
}

button.addEventListener("click", isTriangle);