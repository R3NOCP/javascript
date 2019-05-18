function arithMetic(sum) {
  return "Outcome 6 + 50 * 10 =  " + sum;
}

document.getElementById("arithMetic").innerHTML = arithMetic(6 + 50 * 10);


//LogicalOperator
var a = 5;
var b = 2;
var c = a % b;
document.getElementById("remainder").innerHTML = "What is left 5 % 2 =  " + c;

function logicalOperatorMix(check) {
  return "5 + 5 = 10 en 10 x 20 is groter dan 100 = " + check;
}

document.getElementById("logicalOperatorMix").innerHTML = logicalOperatorMix(5 + 5 == 10 && 10 * 20 > 100);

//Calculator
function number(value){
	document.form.result.value +=value;
	}
	function clear(value){
		document.form.result.value =value;
	}
	function outcome(){
		document.form.result.value = eval(document.form.result.value);
	}
