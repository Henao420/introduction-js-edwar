// Prototype
// El prototipo es como un molde o modelo base
// Para este ejemplo, voy a guardar las funciones comunes en un lugar llamado protoype, asi los objetos del mismo tipo pueden heredarlas.

function Car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

const car1 = new Car("Lamborghini", "Aventador SVJ", "Red");
const car2 = new Car("Rolls Royce", "Cullinam", "Black");

console.log(car1);
console.log(car2);

// Se define la funcion comun para todos los vehiculos
Car.prototype.stop = function() {
    console.log(`El carro ${this.brand} esta parando`);
};

car1.stop();
car2.stop();