// El objeto literal
// Esta es la forma mas comun, pero No es muy dinamico que digamos
// De esta forma el objeto tiene diferentes variables

const product = {
    productName : "Mouse",
    productPrice : 50000,
    productColor : "Red"
}

// Asi se crea un segundo objeto con el objeto literal
const product2 = {
    productName : "Key board",
    productPrice : 80000,
    productColor : "Blue"
}

//=========================================

// Objeto constructor
// Este objeto constructor debe contener todos los diferentes valores que van a formar parte del objeto.
// En los parentesis de la funcion llegan los parametros

function Product(productName, productPrice, productColor) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productColor = productColor;
}

const product3 = new Product("Mouse", 35000, "Green");
const product4 = new Product("Cell Phone", 45000, "Black");
const product5 = new Product("PC", 35000, "White");

console.log(product3);
console.log(product4);
console.log(product5);