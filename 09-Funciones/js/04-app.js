function sumar(a,b){ // a y b son parámetros
    console.log(a+b)
}

sumar(2,3) // 2 y 3 son argumentos

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido} `)
}
saludar('Joa', 'Zmao')

function saludar2(nombre ='desconocido', apellido =' '){
    console.log(`Hola ${nombre} ${apellido} `)
}
saludar2('Joa') //Hola Joa
saludar2() // Hola desconocido
