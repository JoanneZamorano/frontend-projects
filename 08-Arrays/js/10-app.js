const carrito = [
    {nombre: 'Monitor 27"', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},

]


carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`)
})

carrito.map(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`)
})

//La diferencia entre map y forEach:
// .map crea un arreglo nuevo y .forEach no