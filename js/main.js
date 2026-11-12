const proyectos = [
    // JAVASCRIPT
    {
        titulo: "01 - Proyecto Carrito",
        descripcion: "DOM, eventos y carrito de compras.",
        ruta: "./15-PROYECTO-Carrito/",
        activo: true,
        categoria: "javascript",
    },
    {
        titulo: "02 - Simulador de Emails",
        descripcion: "Validación de formularios y eventos.",
        ruta: "./16-PROYECTO-Emails/",
        activo: true,
        categoria: "javascript",
    },
    {
        titulo: "03 - Buscador de Vehículos",
        descripcion: "Filtrado dinámico por múltiples campos.",
        ruta: "./17-PROYECTO-Buscador/",
        activo: true,
        categoria: "javascript",
    },
    {
        titulo: "04 - Tweets con LocalStorage",
        descripcion: "Persistencia de datos con LocalStorage.",
        ruta: "./19-PROYECTO-Tweets/",
        activo: true,
        categoria: "javascript",
    },
    {
        titulo: "05 - Carrito con LocalStorage",
        descripcion: "Persistencia del carrito de compras.",
        ruta: "./20-PROYECTO-Carrito-LocalStorage/",
        activo: true,
        categoria: "javascript",
    },
    {
        titulo: "06 - Cotizador de Seguros",
        descripcion: "Prototipos y programación orientada a objetos.",
        ruta: "./23-PROYECTO-Cotizador/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "07 - Presupuesto",
        descripcion: "Administrador de presupuesto con clases.",
        ruta: "./25-PROYECTO-Presupuesto/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "08 - Citas de Pacientes",
        descripcion: "CRUD de citas usando clases.",
        ruta: "./26-PROYECTO-Citas/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "09 - Citas con Módulos",
        descripcion: "Refactorización usando ES Modules.",
        ruta: "./29-PROYECTO-Citas-Modulos/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "10 - Citas con IndexedDB",
        descripcion: "Persistencia de datos en IndexedDB.",
        ruta: "./31-PROYECTO-Citas-IndexedDB/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "11 - CRM con IndexedDB",
        descripcion: "Gestión de clientes mediante IndexedDB.",
        ruta: "./32-PROYECTO-CRM/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "12 - API del Clima",
        descripcion: "Consulta meteorológica con Fetch API.",
        ruta: "./36-PROYECTO-Clima/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "13 - App de Recetas",
        descripcion: "API + LocalStorage para recetas.",
        ruta: "./37-PROYECTO-Recetas/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "14 - Buscador de Imágenes",
        descripcion: "Consumo de Pixabay API.",
        ruta: "./38-PROYECTO-Pixabay/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "15 - Cotizador de Criptomonedas",
        descripcion: "Consumo de APIs y datos en tiempo real.",
        ruta: "./39-PROYECTO-Criptomonedas/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "16 - REST API Restaurant",
        descripcion: "Consumos, propinas y gestión de pedidos.",
        ruta: "./40-PROYECTO-Restaurant/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "17 - Pixabay con Async Await",
        descripcion: "Migración a Async Await.",
        ruta: "./42-PROYECTO-Pixabay-AsyncAwait/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "18 - Criptomonedas con Async Await",
        descripcion: "Refactorización con Async Await.",
        ruta: "./43-PROYECTO-Criptomonedas-AsyncAwait/",
        activo: false,
        categoria: "javascript",
    },
    {
        titulo: "19 - CRM CRUD REST",
        descripcion: "CRUD completo consumiendo REST API.",
        ruta: "./44-PROYECTO-CRM-CRUD/",
        activo: false,
        categoria: "javascript",
    },
        // REACT
    {
        categoria: "react",
        titulo: "01 - Task Manager",
        descripcion: "Gestión de tareas con React.",
        ruta: "./react/task-manager/",
        activo: false
    },

    // ANGULAR
    {
        categoria: "angular",
        titulo: "01 - Gestor de Clientes",
        descripcion: "CRUD de clientes con Angular.",
        ruta: "./angular/clientes/",
        activo: false
    }
];


const contenedor = document.querySelector(".container");

proyectos.forEach(proyecto => {

    const contenedor = document.querySelector(
        `#${proyecto.categoria}-projects`
    );

    contenedor.innerHTML += `
        <a
            href="${proyecto.activo ? proyecto.ruta : '#'}"
            class="card ${!proyecto.activo ? 'disabled' : ''}"
        >
            <h2>${proyecto.titulo}</h2>
            <p>${proyecto.descripcion}</p>
        </a>
    `;
});