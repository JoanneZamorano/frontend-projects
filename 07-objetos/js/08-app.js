"use strict"; //evalua el codigo de forma estricta


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //congela el objeto para no modificarla
    //da error si añades propiedades o las modificas:
//producto.disponible = false;  //ERROR
//producto.imagen = "imagen.png";  //ERROR

console.log(producto)
console.log(Object.isFrozen(producto))


