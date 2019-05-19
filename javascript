<!DOCTYPE html>
<html lang="NL">
<head>
<title>Reno Postema</title>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="header">
 <a>JAVASCRIPT</a>
 <div class="header-right">
   <a class="active" href="/RCP/basic">Home</a>
   <a href="/RCP/shop">Shop</a>
   <a href="/RCP/contact">Contact</a>
 </div>
</div>
<div class="bg"></div>
<style>
</style>
</head>
<body>
	<h1>Learning Javascript</h1>
	<div class="row">
	  <div class="column" style="background-color:#e8e8e8;">
	    <h2>First code - Arithmetic</h2>
	    <p id="arithMetic"</p>
	  </div>
	  <div class="column" style="background-color:#bbb;">
	    <h2>Code</h2>
	    <code>function arithMetic(sum) {
        return "Outcome 6 + 50 * 10 =  " + sum;
      }

      document.getElementById("arithMetic").innerHTML = arithMetic(6 + 50 * 10);</code>
	  </div>
	</div>
  <h1>Remainder</h1>
	<div class="row">
	  <div class="column" style="background-color:#e8e8e8;">
	    <h2>First code - Remainder</h2>
	    <p id="remainder"</p>
	  </div>
	  <div class="column" style="background-color:#bbb;">
	    <h2>Code</h2>
	    <code>function arithMetic(sum) {
        var a = 5;
        var b = 2;
        var c = a % b;
        document.getElementById("remainder").innerHTML = "What is left 5 % 2 =  " + c;

        </code>
	  </div>
	</div>




<h2>Understanding Arithmetic</h2>
<p id="arithMetic"></p>

<h2>Remainder</h2>
<p id="remainder"></p>

<h2>Logical Operator check - True</h2>
<p id="logicalOperatorMix"></p>

</script>
	<form name="form">
	<table align="left">
	<tr><td colspan="4">Calculator</td></tr>
		<tr><td colspan="4">
		<input type = "text" name="result" placeholder="0" disabled style="text-align:center"></input>
		</td></tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="1">1</button></td>
		<td><button type = "button" onclick="number(value)" value="2">2</button></td>
		<td><button type = "button" onclick="number(value)" value="3">3</button></td>
		<td><button type = "button" onclick="number(value)" value="+">+</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="4">4</button></td>
		<td><button type = "button" onclick="number(value)" value="5">5</button></td>
		<td><button type = "button" onclick="number(value)" value="6">6</button></td>
		<td><button type = "button" onclick="number(value)" value="-">-</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="7">7</button></td>
		<td><button type = "button" onclick="number(value)" value="8">8</button></td>
		<td><button type = "button" onclick="number(value)" value="9">9</button></td>
		<td><button type = "button" onclick="number(value)" value="/">/</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="."><strong>.</strong></button></td>
		<td><button type = "button" onclick="number(value)" value="0">0</button></td>
		<td><button type = "button" onclick="number(value)" value="*">*</button></td>
		</tr>
		<tr>
		<td colspan="2">
		<button type = "button" onclick="clear(value)" value="">C</button></td>
		<td colspan="2">
		<button type = "button" onclick="outcome()">=</button>
		</td>
		</tr>
	</table>
	</form>


<script src="script.js"></script>
</body>
</html>
