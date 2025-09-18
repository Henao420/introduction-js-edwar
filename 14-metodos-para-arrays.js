"use strict"
const numbers = [0, 12, 8, 9, 5, 8, 71, 120, 500];

// Agregar elementos a mi arreglo, pero con este metodo se requiere conocer la longitud del arreglo
// let numbersLength = numbers.length
// console.log(numbersLength);

// numbers [numbersLength] = 100;

// console.log(numbers);

// Con el metodo push se agregan elementos al final del arreglo
// numbers.push(700, 800);

// console.log(numbers);
// console.table(numbers);

// Metodo unshift para agregar elementos al inicio un arreglo
numbers.unshift(-3, -2, -1);

// Metodo para eliminar el ultimo elemento de mi arreglo
// numbers.pop();

// Metodo para eliminar el primer elemento de mi arreglo
// numbers.shift();

// Metodo splice elimina todos los elementos a partir del indice asignado.
// numbers.splice(5);

numbers.indexOf(8);
console.table(numbers);