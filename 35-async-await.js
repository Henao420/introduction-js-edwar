/**
 * Async await
 * Son caracteristicas de JavaScript que facilitan trabajar con funciones asincronas permitiendo escribir codigo que se parece mas al sincrono y es mas facil de leer
 * 
 * Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await, que internamente siguen usando promesas
 * 
 * async: Declara una funcion asincronica, que siempre devuelve una promesa
 * await: Pausa la ejecucion de la funcion async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.
 *  
 */

//===========================================

// Ejemplo con una funcion que se cumple

function downloadNewClients() {

   return new Promise(resolve => {
        console.log("Descargando clientes... espere por favor.");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 6000);
    })
};

// Funcion para descargar los ultimos pedidos

function downloadlastOrders() {

    return new Promise(resolve => {
        console.log("Descargando los ultimos pedidos... espere por favor.");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 8000);
    })
};

// async function app() {
//     try {
//         const result = await downloadNewClients();
//         // Codigo bloqueado hasta que se resuelva la promesa
//         console.log("Codigo que si se bloquea");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();
// console.log("Codigo que No se bloquea");

// Funcion para los ultimos pedidos


async function app() {
    try {
        // const clients = await downloadNewClients();
        // const lastOrders = await downloadlastOrders();

        // // Codigo bloqueado hasta que se resuelva la promesa
        // console.log(clients);
        // console.log(lastOrders);
        
        // Ahora se va a intentar una forma mas eficiente sin que dependa una de la otra
        
        const result = await Promise.all([downloadNewClients(), downloadlastOrders()])

        // console.log("Codigo que si se bloquea");
        console.log(result[0]);
        console.log(result[1]);

    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Codigo que No se bloquea");