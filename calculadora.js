let operaciones = require("./operaciones");
let process = require("process");

let operacion = process.argv[2].toLowerCase();
let numero1 = Number(process.argv[3]);
let numero2 = Number(process.argv[4]);

if (operacion === "sumar"){
    let resultado = operaciones.sumar(numero1, numero2);
    console.log("--------------------------------");
    console.log("El resultado de la operacion " + operacion + " es:");
    console.log(resultado);
    console.log("--------------------------------");
}else if (operacion === "restar"){
    let resultado1 = operaciones.restar(numero1, numero2);
    console.log("--------------------------------");
    console.log("El resultado de la operacion " + operacion + " es:");
    console.log(resultado1);
    console.log("--------------------------------");
}else if (operacion === "multiplicar"){
    let resultado2 = operaciones.multiplicar(numero1, numero2);
    console.log("--------------------------------");
    console.log("El resultado de la operacion " + operacion + " es:");
    console.log(resultado2);
    console.log("--------------------------------");
}else if (operacion === "dividir"){
    let resultado3 = operaciones.dividir(numero1, numero2);
    console.log("--------------------------------");
    console.log("El resultado de la operacion " + operacion + " es:");
    console.log(resultado3);
    console.log("--------------------------------");
}
else{
    console.log("Debe pasar una operacion")
}


