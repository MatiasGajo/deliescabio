
//Esto seria el simulador interactivo, le pido al usuario un numero y que elija si quiere sumar, restar, dividir, o multiplicar y le hago la cuenta correspondiente.

/*eleccion = prompt('Elegi la operacion matematica: +, -, *, /');
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
*/
//--------SEGUNDA PRE ENTREGA-------------------
const productos = [
    {
        nombre: "Corona",
        precio: 450,
        id: "cerveza",
    },
    {
        nombre: "Quimes",
        precio: 300,
        id: "cerveza",
    },
    {
        nombre: "Brahma",
        precio: 400,
        id: "cerveza",
    },
    {
        nombre: "Heineken",
        precio: 375,
        id: "cerveza",
    },
    {
        nombre:"Absolut Apple",
        precio: 1400,
        id: "vodka",
    }
];

alert("Bienvenido a Delivery de Escabio");

let opcion = parseInt(prompt("Que desea comprar?: \n 1) Corona \n 2) Quilmes \n 3) Brahma \n 4) Heineken \n 5) Absolut Apple"));


if(opcion === 1) {
    alert(`Usted eligio ${productos[0].nombre} y cuesta $${productos[0].precio}`);
    let dineroUsuario = prompt("Con cuanta plata quiere pagar?");

    let resultado = productos[0].precio - dineroUsuario;

    if (dineroUsuario < productos[0].precio) {
    alert(`No puede comprar, le faltan $${resultado}`);
}else {
    let resultadoVuelto = dineroUsuario - productos[0].precio;
    alert(`Puede comprar, su vuelto es de $${resultadoVuelto}`)
}
}else if(opcion === 2) {
    alert(`Usted eligio ${productos[1].nombre} y cuesta $${productos[1].precio}`);
    let dineroUsuario = prompt("Con cuanta plata quiere pagar?");

    let resultado = productos[1].precio - dineroUsuario;

    if (dineroUsuario < productos[1].precio) {
    alert(`No puede comprar, le faltan $${resultado}`);
}else {
    let resultadoVuelto = dineroUsuario - productos[1].precio;
    alert(`Puede comprar, su vuelto es de $${resultadoVuelto}`)
}
}else if(opcion === 3) {
    alert(`Usted eligio ${productos[2].nombre} y cuesta $${productos[2].precio}`);
    let dineroUsuario = prompt("Con cuanta plata quiere pagar?");

    let resultado = productos[2].precio - dineroUsuario;

    if (dineroUsuario < productos[2].precio) {
    alert(`No puede comprar, le faltan $${resultado}`);
}else {
    let resultadoVuelto = dineroUsuario - productos[2].precio;
    alert(`Puede comprar, su vuelto es de $${resultadoVuelto}`)
}
}else if(opcion === 4) {
    alert(`Usted eligio ${productos[3].nombre} y cuesta $${productos[3].precio}`);
    let dineroUsuario = prompt("Con cuanta plata quiere pagar?");

    let resultado = productos[3].precio - dineroUsuario;

    if (dineroUsuario < productos[3].precio) {
    alert(`No puede comprar, le faltan $${resultado}`);
}else {
    let resultadoVuelto = dineroUsuario - productos[3].precio;
    alert(`Puede comprar, su vuelto es de $${resultadoVuelto}`)
}
}else if(opcion === 5) {
    alert(`Usted eligio ${productos[4].nombre} y cuesta $${productos[4].precio}`);
    let dineroUsuario = prompt("Con cuanta plata quiere pagar?");

    let resultado = productos[4].precio - dineroUsuario;

    if (dineroUsuario < productos[4].precio) {
    alert(`No puede comprar, le faltan $${resultado}`);
}else {
    let resultadoVuelto = dineroUsuario - productos[4].precio;
    alert(`Puede comprar, su vuelto es de $${resultadoVuelto}`)
}
}else {
    alert("Elija una opcion correcta");
    
}


 //--------------------Aca les muestro todos los productos de cerveza en la consola-----------------------

 const cerveza = productos.filter((producto) => producto.id.includes ("cerveza"));
 console.log(cerveza);



