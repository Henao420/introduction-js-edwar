// Functions en JS
// ¿Que es Hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "MUEVE" la declaraciones (de variables y funciones) a la parte superior de su ambito (scope) y lo mueve antes de ejercutar el codigo.
// Esto significa que puedes usar una funcion o variable declarada antes de escribirla en el codigo.

// Declaracion de una funcion
// Como esta funcion esta declarada se puede llamar antes o despues de su creacion
add();

function add(){
    console.log(10 + 10);
};

// ==================================================

// La expresion de una funcion
// La expresion de la funcion solo puede llamarse despues de su creacion

const sumar2 = function(){
    console.log(3 + 3);
};
sumar2();

// ==================================================
// IIFE (Inmedatly Invoked Function Expression), esta funcion se llama asi misma
// Son utiles para proteger las variables para que no se mezclen con las variables de otros archivos
(function(){
    console.log("Esta es una funcion IIFE")
})();

// Una funcion IIFE con parametros
(function(name){
    console.log(`Hello ${name}`)
})(['Dilan']);

console.log(client);