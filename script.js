function arithMetic(sum) {
  return "Outcome 6 + 50 * 10 =  " + sum;
}

document.getElementById("arithMetic").innerHTML = arithMetic(6 + 50 * 10);

var a = 5;
var b = 2;
var c = a % b;
document.getElementById("remainder").innerHTML = "What is left 5 % 2 =  " + c;
