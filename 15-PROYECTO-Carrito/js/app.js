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
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarrito.addEventListener('click', ()=>{
        articulosCarrito = [];
        limpiarHTML();
    })
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
 
        leerDatosCurso(cursoSeleccionado);
    }
    

}

//Elimina un curso del carrito
function eliminarCurso(e){
   
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML();
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
    //revisa si un elemento ya existe en el carrito (.some)
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if( curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso; //retorna los objetos no duplicados
            }
        });
        articulosCarrito = [...cursos]

    }else{
        //agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    

    console.log(articulosCarrito)
    carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar el html

    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso =>{
        const {imagen, titulo, precio, cantidad, id}=curso;
        const row = document.createElement('tr');
        row.innerHTML= `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>

            <td>
                <a href="#" class="borrar-curso" data-id=${id}>x</a>
            </td>
        `;
        //agrega el html del carrito en el tbody:
        contenedorCarrito.appendChild(row)
    })
}

//elimina los cursos del tbody
function limpiarHTML(){
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}




