// Try catch
// Es una estructura para manejar errores en tiempo de ejecucion, permitiendo que el programa continue ejecutando sin fallar completamente.
// try: dentro de este bloque que puede generar un error.
// catch: Captura el error si ocurre dentro de try y permite manejarlo.

const num1 = 20;
const num3 = 30;

console.log(num1);

try {
    console.log(num2);
} catch (error) {
    console.log("Error, la variable No existe");
}

console.log(num3);

//=====================================================

//Ejercicio 2

try {
    console.log(x);
} catch (error) {
    console.log("Ocurrio un error", error.message);
}

//=====================================================

// Throw: lanza manualmente un error
// JS lanza un error y detiene inmediatamente la ejecucion dentro del bloque try
function divide(num5, num6) {
    try {
        if (num6 === 0) throw "No se puede dividir entre cero"
        console.log("Esto no se ejecuta si sucede un error");
        return num5 / num6;
    } catch (error) {
        return "Error", error;
    }
}

console.log(divide(10, 5));