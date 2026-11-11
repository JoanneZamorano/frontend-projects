//iniciar con un arreglo vacio:
const carrito = []
  
//definir un producto
const producto ={
    nombre:'Monitor de 30"',
    precio: 300
}

const producto2 ={
    nombre:'Movil"',
    precio: 700
}

const producto3 ={
    nombre:'Teclado',
    precio: 50
}


carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3) 
console.table(carrito) // producto, producto2, producto3

//Eliminar ÚLTIMO elemento de un arrgelo
carrito.pop()
console.table(carrito) // producto, producto2

//__________________
carrito.push(producto3) 
console.table(carrito) // producto, producto2, producto3

//Eliminar PRIMER elemento de un arrgelo
carrito.shift()
console.table(carrito) // producto2, producto3

//__________________
carrito.unshift(producto) 
console.table(carrito) // producto, producto2, producto3

//Eliminar un elemento en concreto
carrito.splice(1,1) 
    //primer numero que posición a eliminar
    //segundo elemento: cuantos elementos a eliminar
    
console.table(carrito) // producto, -- , producto3
                       //   0       1       2

