console.log ("hola");
//Esto seria el simulador interactivo, le pido al usuario un numero y que elija si quiere sumar, restar, dividir, o multiplicar y le hago la cuenta correspondiente.

eleccion = prompt('Elegi la operacion matematica: +, -, *, /');
num1 = parseFloat(prompt('Ingresa el primer numero: '));
num2 = parseFloat(prompt('Ingresa el segundo numero: '));


function calcular(a, b) {
  switch(eleccion) {
  case '+':
   return a + b;
    break;
  case '-':
  return a - b;
    break;
  case '*':
    return a * b;
    break;
  case '/':
    return a / b;
  default:
    0;
 }
}

alert(calcular(num1, num2));
//Ejercio de condicional, le pido al usuario que ingrese un numero y yo le digo que numero ingreso.


let numeroIngresado = prompt("Ingresa un numero del 0 al 9");

if (numeroIngresado == 0) {
    alert("El numero que ingresaste es cero");
} else if (numeroIngresado == 1) {
    alert("El numero que ingresaste es uno");
} else if (numeroIngresado == 2) {
    alert("El numero que ingresaste es dos");
} else if (numeroIngresado == 3) {
    alert("El numero que ingresaste es tres");
} else if (numeroIngresado == 4) {
    alert("El numero que ingresaste es cuatro");
} else if (numeroIngresado == 5) {
    alert("El numero que ingresaste es cinco");
} else if (numeroIngresado == 6) {
    alert("El numero que ingresaste es seis");
} else if (numeroIngresado == 7) {
    alert("El numero que ingresaste es siete");
} else if (numeroIngresado == 8) {
    alert("El numero que ingresaste es ocho");
} else if (numeroIngresado == 9) {
    alert("El numero que ingresaste es nueve");
} else {
    alert("Por favor, ingrese un numero correcto.");
}


//Le pido al usuario que ingrese un numero y ese numero se lo multiplico 10 veces

let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for ( let i=1; i<=10; i++ ) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " x " + i + " = " + resultado);
}
