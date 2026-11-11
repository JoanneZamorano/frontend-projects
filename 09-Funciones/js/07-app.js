
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el numero ${id}`) 
    }, pausar:function(){
        console.log('pausando...')
    },borrar: function(id){
        console.log(`Borrando canción con el numero ${id}`)
    },creandoPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.creandoPlaylist("Rock")