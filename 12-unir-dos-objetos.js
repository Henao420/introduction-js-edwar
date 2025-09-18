// Cuando se unen dos objetos lo ideal es No modificar ninguno de los dos objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

Object.freeze(product);

// Objeto que almacena medidas
const measurements = {
    weight : '1 kg',
    measurement : '10cm'
}

// Rest operator, consta de (...)

// const newProducto = {...product, ...measurements};

// console.log(product);
// console.log(newProducto);

const vehicle = {
    brand : 'Lamborghini',
    model : 'Veneno Roadster',
    color : 'Black',
    maxSpeed : '355Km/H'
}

const motorbike = {
    marca : 'Ducatti',
    model : 'StreetFigther V4',
    color : 'Red',
    maxSpeed: '299Km/H'
}