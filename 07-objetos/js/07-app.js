
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto)


producto.disponible = false;
console.log(producto) //disponible -> false
//se puede modificar las propiedades del objeto