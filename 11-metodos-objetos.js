// DILAN ESTIVEN HENAO MONTOYA

// Metodos para los objetos
// Con esta linea de codigo garantizo buenas practicas
"use strict";

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

// Aunque el objeto product este declarado como constante permite agregar propiedades
product.quantity = 10;
console.log(product);

// Con el metodo o funcion freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas o modificarlas (editarlas)
// Object.freeze(product);

// Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedad
Object.seal(product);

// Vamos a agregar una nueva propiedad color
// product.color = "red";

// Forma de saber si un objeto esta bloqueado
// console.log("¿El objeto esta bloqueado?: " + Object.isFrozen(product));


// let response;
// if (Object.isFrozen(product)) {
//    let response = "Si";
// } else {
//    response = "No"
// }

// console.log("¿El objeto esta bloqueado?: ", response);

// Eliminar una propiedad de un objeto
// delete product.price;
// console.log(product);

// Modificar o editar las propiedades de un objeto
product.productName = "Sensor de PH";
console.log(product);

// Saber si un objeto esta sellado
console.log("¿El objeto esta bloqueado?: " + Object.isSealed(product));
