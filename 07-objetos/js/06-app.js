
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion:{
            pais: 'china'
        }
    }
}

console.log(producto)


//destructuring
const {informacion: {fabricacion}} = producto 
console.log(fabricacion) //pais = 'china'

//acceder a varias
const {nombre, informacion: {medidas}} = producto 
console.log(nombre) //"Monitor 20 pulgadas"
console.log(medidas)// peso y medida