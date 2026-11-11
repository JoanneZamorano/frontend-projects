
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

//Forma anterior
const nombreOld = producto.nombre;
console.log(nombreOld)


//Destructuring - extraer una propiedad del objeto
const {nombre} = producto;
console.log(nombre)

const {precio , disponible} = producto;
console.log(precio)
console.log(disponible)


