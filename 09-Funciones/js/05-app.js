iniciarApp()

function iniciarApp(){
    console.log('Iniciando app...')

    segundaFuncion()
}

function segundaFuncion(){
    console.log('Desde la segunda función')

    usuarioAutentificado(`Joa`)
}

function usuarioAutentificado(usuario){
    console.log('Autentificando usuario...espere...')
    console.log(`Usuario autentificando correctamente ${usuario}`)

}