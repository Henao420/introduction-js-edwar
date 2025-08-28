// String o cadena de texto
const sensor = "Temperatura";
const sensor2 = 'PH';

console.log(sensor);
console.log(sensor2);
// Estas dos formas NO son tan comunes
const sensor3 = String('Presion');
const sensor4 = new String('Humedad');

console.log(sensor3);
console.log(sensor4);

// Para saber el tipo de dato de una variable
console.log(typeof sensor3);

let product = ("Televisor de 32\"");
let product2 = ("Televisor de 58\"");
console.log(product);
console.log(product2);

// Metodos con String
console.log(product2.length);

let userName = ("Dilan Estiven Henao Montoya");
console.log(userName.length);

// Sirve para saber si una cadena de texto existe en una frase
// indexOf nos muestra la posicion en la que se encuentra la cadena de texto
// Si la cadena no existe muestra un resultado menor que cero(0)
let phrase = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.indexOf('SENA'));

// Hacer la mismo de una forma mas moderna, el resultado es un true o un false
let phrase2 = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.includes('SENA'));
