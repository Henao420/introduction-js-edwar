// This es una palabra reservada en el sistema, o sea que no se puede crear ni funciones ni variables en este nombre.

const reservation = {
    userName: "Dilan",
    lastName: "Montoya",
    userAge: 19,
    total: 100000,
    isPaid: false,

// Los objetos pueden contener funciones
    information: function() {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento no se registra el estado del pago es ${this.isPaid}`);
    }
};

const reservation2 = {
    userName: "Pedro",
    lastName: "Cardona",
    userAge: 24,
    total: 150000,
    isPaid: true,

// Los objetos pueden contener funciones
    information: function() {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento no se registra el estado del pago es ${this.isPaid}`);
    }
};

const reservation3 = {
    userName: "Juan",
    lastName: "Ramirez",
    userAge: 34,
    total: 50000,
    isPaid: true,

// Los objetos pueden contener funciones
    information: () => {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento no se registra el estado del pago es ${this.isPaid}`);
    }
};

// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio usar la funcion de esta manera, porque esta hace referencia al objeto que se esta usando.
reservation.information();
reservation2.information();

// Si se usa arrow function no es capaz de leer los datos del contexto, dando como resultado undefined.
reservation3.information();

