/*
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
*/


const reproductor = {
    cancion: '',

    reproducir: id => console.log(`Reproduciendo canción con el numero ${id}`),
    pausar:() => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con el numero ${id}`),
    creandoPlaylist: nombre => console.log(`Creando Playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.creandoPlaylist("Rock")