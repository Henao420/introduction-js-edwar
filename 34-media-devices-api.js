// Solicitar permisos para o de camara y microfono

const button = document.querySelector(".button")

button.addEventListener('click', async () => {
    try {
        await navigator.mediaDevices.getUserMedia
        ({video: true, audio: true});

    const permission = await Notification.requestPermission();

    console.log(`Estado del permiso: ${permission}`)

    if (permission === 'granted') {
        new Notification("Permisos concedido", {
            body: "¡Camara y microfono activados!",
            icon: "/assets/icons/svj.jpg"
        });
    }else {
        console.log("Permiso denegado");
    }
    }catch(error){
        console.log("Error al solicitar permisos", error);
        alert('No se concedieron los permisos solicitados');
     }

});