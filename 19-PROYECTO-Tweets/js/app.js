//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Evenst Listeners
eventListeners();


function eventListeners(){
    //Cuando los usuarios agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

    //Cuando el documento esté listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    })
}


//Funciones -------------------

// Añadir tweet del formulario
function agregarTweet(e){
     e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return; // Evitan que se ejecuten más lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }

    //Añadir a un arreglo de Tweets
    tweets = [...tweets, tweetObj];
    
    //Una vez agregado, añadimos el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();

}

//Mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000)
} 

function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0 ) {
        tweets.forEach( tweet =>  {
            // crear boton de eliminar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'X';
     
            // Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.tweet;

            // añade el botón de borrar al tweet
               li.appendChild(botonBorrar);

            // añade un atributo único...
            li.dataset.tweetId = tweet.id;

            // añade el tweet a la lista
            listaTweets.appendChild(li);
          });
     }

    sincronizarStorage();

}
// Elimina el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();

     // console.log(e.target.parentElement.dataset.tweetId);
     const id = e.target.parentElement.dataset.tweetId;
     tweets = tweets.filter( tweet => tweet.id != id  );
     crearHTML();
}

//Agregar los Tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))

}

//limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}