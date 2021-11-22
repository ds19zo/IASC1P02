function Add(){
  var first = Number(document.getElementByName('Num1').value);
  var second = Number(document.getElementByName("Num2").value);
  document.getElementById("output").innerHTML = first + second;
}
