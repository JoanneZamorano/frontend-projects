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

let resultado;

//copia carrito y le añade el producto, NO MODIFICA EL CARRITO
resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]



console.log(carrito)
