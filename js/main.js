const valorDolar = 289;

let montoIngresado = prompt("Ingrese el monto a comprar dólares ($ " + valorDolar + " c/u)");

let totalDolares =  Number(montoIngresado) / valorDolar;

alert("Usted ha comprado " + totalDolares + " dólares.");
console.log( "Usted a comprado " + totalDolares + " dólares." );


alert("Usted ha comprado " + parseFloat(totalDolares).toFixed(2) + " dólares.");
console.log( "Usted ha comprado " + parseFloat(totalDolares).toFixed(2) + " dólares." );