
// Declaracion de Funcion (Function Declaration)
sumar() //FUNCIONA
function sumar(){
    console.log(2+2) //4
}



// Expresion de la funcion (Fuction Expression)
sumar2() //DA ERROR, PORQUE ESTA ANTES DE LA FUNCION
const sumar2 = function(){
    console.log(3+3) //6
}


//La diferencia entre ambas es que sumar (4) si va a aparecer, sumar2 (6) NO