/**
 * Fetch API: Es una funcion JS que permite hacer peticiones de tipo HTTP, incluyendo GET, POST, PUT, DELETE, etc, Es una API moderna.
 * 
 */

function getEmployees(){
    // fetch('Aqui se copia la URL, https://ricoprogramar.com/')
    // Aunque para este caso estamos haciendo una peticion a un archivo local
    // fetch("/data/employees.json");

    const file = "/data/employees.json";

    fetch(file)
    // Obtenemos los datos
    .then((result) => {
        return result.json();
    })

    // Este then es para acceder a los datos
    .then(data => {

        const {employees} = data;

        employees.forEach(employe => {

            console.log(employe.user);
            console.log(employe.id);
            console.log(employe.job);
            document.querySelector(".content").textContent += employe.user;
        });


        console.log(employees);
    });
}

getEmployees();