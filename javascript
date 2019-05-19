<!DOCTYPE html>
<html lang="NL">
<head>
<title>Reno Postema</title>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="header">
 <a>JAVASCRIPT</a>
 <div class="header-right">
   <a class="active" href="/js/javascript">Home</a>
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
      <p><strong>Expected result:</strong> 506</p>
	  </div>
	  <div class="column" style="background-color:#bbb;">
	    <h2>Code</h2>
	    <code>
        //Arithmetic
        function arithMetic(sum) {
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
      <p><strong>Expected result:</strong> 1</p>
	  </div>
	  <div class="column" style="background-color:#bbb;">
	    <h2>Code</h2>
	    <code>
        // Remainder
        function arithMetic(sum) {
        var a = 5;
        var b = 2;
        var c = a % b;
        document.getElementById("remainder").innerHTML = "What is left 5 % 2 =  " + c;</code>
	  </div>
	</div>
  <h1>Logical Operator check - True</h1>
  <div class="row">
    <div class="column" style="background-color:#e8e8e8;">
      <h2>First code - Logical Operator</h2>
      <p id="logicalOperatorMix"</p>
      <p><strong>Expected result:</strong> True</p>
    </div>
    <div class="column" style="background-color:#bbb;">
      <h2>Code</h2>
      <code>
        // Logical operator Mix - True <br>
        function logicalOperatorMix(check) {
        return "5 + 5 = 10 && 10 x 20 > 100 = " + check;
      }

      document.getElementById("logicalOperatorMix").innerHTML = logicalOperatorMix(5 + 5 == 10 && 10 * 20 > 100);
</code>
    </div>
  </div>
  <div class="footer">
    <div class="row">
    <div class="column.footer">
      <h2 class="footer-h2">CONTACT</h2>
      <p class="footer-text">Student @ CodeGorilla</p>
      <p class="footer-text">Kwinkenplein 10</p>
      <p class="footer-text">9712 GZ Groningen</p>
      <p class="footer-text">The Netherlands</p>
    </div>
      <div class="footer-container">
          <a class="social">FOLLOW ME ON:</a>
          <a href="#" class="fa fa-facebook fa-2x"></a>
          <a></a>
          <a href="#" class="fa fa-twitter fa-2x"></a>
          <p class="copyright">© Reno Postema 2019</p>
      </div>
<script src="script.js"></script>
</body>
</html>
