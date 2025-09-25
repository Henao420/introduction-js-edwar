// Diferencias entre metodos y funciones
const num1 = 10;
const num2 = '20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// Parsear es convertir un tipo de variable a otro tipo
console.log(num1);
console.log(parseInt(num2));

// Este metodo convierte de numero a String
console.log(num1.toString())
console.log(num1);

// ==========================================
// Funcion: bloque de codigo independiente que realiza una tarea
function greet(){
    console.log('Hello');
}

greet();

// ==========================================

const person = {
    userName: "Dilan",
    greet: function(){
        console.log(`Hello, I'm ${this.userName}`);
    }
}

// Metodo es una funcion asociada a un objeto (Se llama a traves de un punto)
person.greet();// Metodo porque pertenece a person
console.log(typeof person);

// Una funcion existe por si sola
// Un metodo es una funcion dentro de un objeto