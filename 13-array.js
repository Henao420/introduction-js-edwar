// Array em JS

const numbers = [0, 20, 30, 80, 100];

console.log(numbers);

// Otra forma de visualizacion
console.table(numbers);

// Crear un arreglo con el constructor
const months = new Array('May', 'January', 'July', 'June');

console.table(months);

const miArray = ['Hello', 42, true, false, null ,{ myName: "Dilan", myJob: "Aprendiz" },[3172293, 3147286, 3036193]];

console.log(miArray);

// Consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(miArray[5]);

// Metodo para conocer la longitud de un arreglo
console.log ("Edwar tu arreglo tiene: " + numbers.length + " elementos" );

// Un iterador con forEach
const numbers2 = [0, 20, 30, 80, 100];
numbers2.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month);
})

miArray.forEach(function(element){
    console.log(element);
})