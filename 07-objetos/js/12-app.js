//Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const p2 = new Producto('Monitor 30 pulgadas', 400)
const p3 = new Producto('Tablet', 350)

console.log(p2)
console.log(p3)