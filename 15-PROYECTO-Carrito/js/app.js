// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


//Funciones
cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso)
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
 
        leerDatosCurso(cursoSeleccionado);
    }
    

}

//Lee el contenido del HTML al que damos clic y extrae la informacion del curso
function leerDatosCurso(curso){
    

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    
    //agregar elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito)
    carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar el html

    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso =>{
        const row = document.createElement('tr');
        row.innerHTML= `
            <td>
                ${curso.titulo}
            </td>
        `;
        //agrega el html del carrito en el tbody:
        contenedorCarrito.appendChild(row)
    })
}

//elimina los cursos del tbody
function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
}




