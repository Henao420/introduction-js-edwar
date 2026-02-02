// ForEach map son metodos exclusivos de arreglos

const shoppingCart = [
    {productName: 'Smart TV 60"', price: 900, color: "red"},
    {productName: 'Smart TV 50"', price: 700},
    {productName: 'Tablet', price: 500},
    {productName: 'Sound-bar', price: 900},
    {productName: 'Google Assistant', price: 600},
    {productName: 'Sound-bar', price: 400},
    {productName: 'PlayStation', price: 800},
    {productName: 'Wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// Recorrer un arreglo por cada elemento
//shoppingCart.forEach(function(product){
//    console.log(product);
//});

// Acceder a un elemento especifico
//shoppingCart.forEach(function(product){
//    console.log(product.price);
//});

// Acceder a un elemento especifico
//shoppingCart.forEach(function(product){
//    console.log(product.productName);
//});

// Acceder a un elemento especifico
//shoppingCart.forEach(function(product){
//    console.log(product.color);
//});

//==============================================

// Ahora forEach con arrow function

// Recorrer un arreglo por cada elemento
shoppingCart.forEach((product) => console.log(product));

shoppingCart.forEach((product) => console.log(product.price));

shoppingCart.forEach((product) => console.log(product.productName));

shoppingCart.forEach((product) => console.log(product.color));