

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto)) //devuelve un arreglo con las llaves del objeto (nombre, precio, disponible)
console.log(Object.values(producto)) //devuelve un arreglo con los valores del objeto (monitor..., 300, true)

console.log(Object.entries(producto)) //devuelve todo en pares.