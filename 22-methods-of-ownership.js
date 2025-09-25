// Metodos de propiedad

const player = {
    play : function(id){
        console.log("Playing song...", id);
    },

    pause : function(id){
        console.log(`Paused... ${id}`);
    },

    delete : function(id){
        console.log(`Deleting song... ${id}`);
    },

    playlist : function(id){
        console.log(`Creating playlist... ${id}`);
    }
};

console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
player.playlist(217);