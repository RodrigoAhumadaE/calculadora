const pantalla = document.querySelector('.pantalla');
let numMax = "";
let num1 = "";
let num2 = "";
let operador = "";

function clickNum(element) {
  let num = element.innerText;
  numMax += num;
  if(numMax.length <= 9){
    num1 = numMax;
    pantalla.innerText = num1;
  }else{
    alert("La calculadora solo acepta numeros de máximo 9 digitos")
  }
}

function enviaOperador(element) {
  operador = element.value;
  if(num2 === ""){
    num2 = num1;
    num1 = "";
    numMax = "";
  }
}

function limpiarValores(){
  num1 = "";
  num2 = "";
  operador = "";
  numMax = "";
}

function limpiarPantalla() {
  limpiarValores();
  pantalla.innerHTML = "0";
}

function calcular() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  let res = 0;
  switch(operador) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  let resString = res.toString();
  let punto = resString.indexOf('.')
  if(punto !== -1){
    let numDecimal = 9 - (punto + 1);
    res = res.toFixed(numDecimal);
    pantalla.innerText = res;
    limpiarValores();
  }else if(resString.length <= 9){
    num1 = res;
    op = "";
    pantalla.innerText = res;
    limpiarValores();
  }else{
    pantalla.innerText = "error...";
    setTimeout(function() {
      alert(`el resultado ${res} es muy grande para mostrarlo en la pantalla de la calculadora`);
    }, 300);
  }  
}