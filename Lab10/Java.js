function Add(){
  var first = +(document.getElementById("Num1").value);
  var second = +(document.getElementById("Num2").value);
  var output = first + second;
  document.getElementById("output").innerHTML = output;
}

function Subtract(){
  var first = +(document.getElementById("Num1").value);
  var second = +(document.getElementById("Num2").value);
  var output = first - second;
  document.getElementById("output").innerHTML = output;
}

function Multiply(){
  var first = +(document.getElementById("Num1").value);
  var second = +(document.getElementById("Num2").value);
  var output = first * second;
  document.getElementById("output").innerHTML = output;
}

function Divide(){
  var first = +(document.getElementById("Num1").value);
  var second = +(document.getElementById("Num2").value);
  var output = first / second;
  document.getElementById("output").innerHTML = output;
}
