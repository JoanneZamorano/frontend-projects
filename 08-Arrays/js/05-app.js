//iniciar con un arreglo vacio:
const carrito = []
  
//definir un producto
const producto ={
    nombre:'Monitor de 30"',
    precio: 300
}

carrito.push(producto)
console.table(carrito)

const producto2 ={
    nombre:'Movil"',
    precio: 700
}

//al final del arreglo
carrito.push(producto2)
console.table(carrito) //producto, producto2

const producto3 ={
    nombre:'Teclado',
    precio: 50
}

//al principio del arreglo
carrito.unshift(producto3) 
console.table(carrito) // producto3, producto, producto2
