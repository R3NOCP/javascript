<html>
<body>
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
