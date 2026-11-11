"use strict"; //evalua el codigo de forma estricta


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto); // no se puede agregar o eliminar propiedades, PERO SI MODIFICAR

producto.disponible = false;
//producto.imagen = "imagen.png"; //ERROR

console.log(producto)
console.log(Object.isSealed(producto))