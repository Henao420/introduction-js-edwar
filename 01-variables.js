// alert("Estoy en Hello World");
// Convenciones para nombrar variables

// CamelCase
// UpperCamelCase  => Se usa para nombrar las clases en JavaScript
// lowerCamelCase  => Se usa para nombrar las variables en JavaScript
// SCREAMIG_SNAKE_CASE => Se usa para nombrar las variables constantes
// caja-kebab  => Se usa para nombrar archivos multimedia en JavaScript

// snake_case  => Generalmente usado para nombrar variables en el lenguaje Phyton

// Caja-De-Tren => Variante del kebab-case

// Ya NO se usa var para declarar las variables, actualmente se usa let
// En JavaScript no es obligatorio indicar el tipo de variable
// JavaScrip se puede o NO usar el punto y conma al final de una sentencia

var product = 'sensor-1';
var product2 = 'sensor-2';

console.log(product);
console.log(product2);

// No se puede usar una variable con un guion medio
// var -sensor = "sensor"

// No se puede iniciar una variable con numero
// var 1sensor = "sensor-4"

var _sensor = "sensor_5"

// Si esta permitido iniciar una variable con guion al piso
console.log(_sensor);

// Crear una variable de las tres formas distintas

// var sensor10 = "Sensor de lluvia";
// const sensor10 = "Sensor de lluvia";
let sensor10 = "Sensor de lluvia";

console.log(sensor10);

// Ejemplo con var
// No indica error por duplicidad de variables
// var sensor11 = "Sensor de humedad";
// var sensor11 = "Sensor de calor";

// console.log(sensor11)

// let no permite duplicidad al declarar variables
// let sensor12 = "Sensor de velocidad";
// let sensor12 = "Sensor de luz";

// No muestra error por falta de inicializacion
// var userName = "Dilan";
// console.log(userName);

// console.log(userName);
// let userName = "Dilan";

// Usando la declaracion const NO se puede cambiar su valor
// const maxSize = 1024;
// maxSize = 2048;

// console.log(maxSize);
