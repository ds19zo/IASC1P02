function Equals(){

  var Numb1 = document.getElementById("Num1").value;
  var Numb2 = document.getElementById("Num2").value;

  var output = parseFloat (Numb1)+parseFloat(Numb2);
  document.getElementById("out").innerHTML = output;
}
