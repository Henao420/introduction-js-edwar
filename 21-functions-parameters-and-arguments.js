// Funciones parametros y argumentos

// Los parametros de pasan en los parentesis de la funcion
function add(num1, num2) {
    return console.log(num1 + num2);
};

add(5, 15);// Estos valores que se envian a la funcion se llaman argumentos
add(7, 85);
add(3, 20);
add(7, 7);
add(5, 5);

// ============================================
const add1 = (function (num3, num4) {
    return console.log(num3 + num4);
});

add1(7, 85);
add1(3, 20);
add1(7, 7);
add1(5, 5);

// ============================================

// Ejermplo cuando no se colocan argumentos, se coloca por defecto los valores en los parametros
function add2(num7 = 35, num8 = 10) {
    return console.log(num7 - num8)
};
add2();

// Funcion que retorna un valor
function add4(num9, num10) {
    return num9 * num10
};

const result = add4(4, 5)
console.log(result);

// Ejemplo un poco mas avanzado
let total = 0;
// Funcion para sumar productos
function addShoppinCart(price){
    return total += price
};

// Agrega funcion para agregar el impuesto a pagar
function calculateTax(total){
    return 1.19 * total;
};

total = addShoppinCart(800);
total = addShoppinCart(500);
total = addShoppinCart(200);
total = addShoppinCart(900);

console.log(`La suma de los productos es: ${total}`);

const totalToPay = calculateTax(total);

console.log(`La suma de los productos mas el impuesto son: ${totalToPay}`);

