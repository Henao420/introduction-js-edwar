// Notificacion API
// La notifications api es un interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña No esta activa.

const button = document.querySelector(".button")

button.addEventListener('click', () => {
    console.log("You made click");
    Notification.requestPermission().then(Permissions => {
        if (Permissions === "granted") {
            new Notification("Esta es una notificacion de Dilan", {
                body : "Aprendiendo JS en el SENA",
            });
        } else {
            console.log("Permiso denegado");
        }
    });
});
