
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//DESTRUCTURING

const {nombre} = producto;
console.log(nombre)

//DESTRUCTURING CON ARREGLOS

const numeros = [10, 20, 30, 40, 50]

const [primero, segundo, tercero] = numeros;
//       10       20        30
console.log(primero) //10
console.log(tercero) //30

const [, , num3] = numeros //30
console.log(num3) //30

const [n1, , n3, , n5] = numeros //10 , 30, 50
//     10 20 30  40 50
console.log(n3) //30