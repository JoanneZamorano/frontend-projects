
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.png"

console.log(producto)

//eliminar una propiedad del objeto
delete producto.disponible;

console.log(producto)