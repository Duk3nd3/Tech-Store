//!CLASE
class Productos {

    //*CONSTRUCTOR Y SUS PROPIEDADES
    constructor(id, video, procesador, memoria, valor, nombre) {

        this.id = id
        this.video = video
        this.procesador = procesador
        this.memoria = memoria
        this.valor = valor
        this.nombre = nombre

    }

    //*METODO
    mensaje() {

        alert(`COMPRA REALIZADA CON EXITO \n\n Id producto: ${this.id}  \n Placa de video:  ${this.video} \n Procesador: ${this.procesador} \n Memoria RAM: ${this.memoria} \n Precio: $${this.valor} \n Marca: ${this.nombre}`);

    }

};

//!OBJETOS DE LA CLASE PRODUCTOS
const combo1 = new Productos(1, "590 RX", "i3", "DDR3", 130000, "GIGABYTE");
const combo2 = new Productos(2, "2080 RTX", "i5", "DDR4", 210000, "MSI");
const combo3 = new Productos(3, "3070 RTX", "i7", "DDR5", 350000, "EVGA");

//!AQUI COMENZAMOS CON LA EJECUCION DEL CODIGO LLAMANDO A LAS FUNCIONES

let contenido = document.querySelector('#contenido')

function traer() {

    fetch('/json/stock.json')

        .then(res => res.json())
        .then(datos => {
            
        tabla(datos)
    })
}

function tabla(datos) {
    
    contenido.innerHTML = ''

    for(let valor of datos){
        
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.marca }</td>
            <td>${ valor.modelo }</td>
            <td>${ valor.stock ? "Stock Disponible" : "Sin Stock" }</td>
        </tr>
        
        `
    }
}

//!LLAMADO AL TEMPLATE VGA.JS
const cajaProductosVga = document.querySelector('#caja-productos-vga');

stockProductos_vga.forEach((productosVga) => {

    const article = document.createElement('article');
    article.classList.add('col-6', 'col-md-4');
    article.id = `${productosVga.id}`;

    article.innerHTML = `
        <div class="card">
            <img src=${productosVga.img} class="card-img-top"
            alt="placa de video">
            <div class="card-body">
                <h5 class="card-title">${productosVga.marca}</h5>
                <p class="card-text">${productosVga.modelo}</p>
                <p class="card-text">${productosVga.desc}</p>
                <p class="card-text">$${productosVga.precio}</p>
                <p class="card-text">${productosVga.memoria}</p>
                <button id="${productosVga.id}" class="btn btn--4 btn-dark">Agregar</button>
            </div>
        </div>
    `

    cajaProductosVga.append(article);

    //!CREAMOS LA CONSTANTE BOTON PARA EL PRODUCTO
    const botonVGA = document.getElementById(`${productosVga.id}`);

    //!MEDIANTE LA CONSTANTE boton CREAMOS UNA FUNCION CON UN EVENTO
    botonVGA.addEventListener('click', () => {

        agregarAlCarritoVGA(productosVga.id);

    });

});

//!LLAMADO AL TEMPLATE PROCESADORES.JS
const cajaProductosCore = document.querySelector('#caja-productos-core');

stockProductos_procesadores.forEach((productosCore) => {

    const article = document.createElement('article');
    article.classList.add('col-6', 'col-md-4');
    article.id = `${productosCore.id}`;

    article.innerHTML = `
        <div class="card">
            <img src=${productosCore.img} class="card-img-top"
            alt="procesador">
            <div class="card-body">
                <h5 class="card-title">${productosCore.marca}</h5>
                <p class="card-text">${productosCore.modelo}</p>
                <p class="card-text">${productosCore.desc}</p>
                <p class="card-text">$${productosCore.precio}</p>
                <p class="card-text">${productosCore.velocidad}</p>
                <button id="${productosCore.id}" class="btn btn--4 btn-dark">Agregar</button>
            </div>
        </div>
    `

    cajaProductosCore.append(article);


    //!CREAMOS LA CONSTANTE BOTON PARA EL PRODUCTO
    const botonCORE = document.getElementById(`${productosCore.id}`);

    //!MEDIANTE LA CONSTANTE boton CREAMOS UNA FUNCION CON UN EVENTO
    botonCORE.addEventListener('click', () => {

        agregarAlCarritoCORE(productosCore.id);

    });

});

//!LLAMADO AL TEMPLATE MOTHERS.js
const cajaProductosMother = document.querySelector('#caja-productos-mother');

stockProductos_mothers.forEach((productosMother) => {

    const article = document.createElement('article');
    article.classList.add('col-6', 'col-md-4');
    article.id = `${productosMother.id}`;

    article.innerHTML = `
            <div class="card">
                <img src=${productosMother.img} class="card-img-top"
                alt="procesador">
                <div class="card-body">
                    <h5 class="card-title">${productosMother.marca}</h5>
                    <p class="card-text">${productosMother.modelo}</p>
                    <p class="card-text">${productosMother.desc}</p>
                    <p class="card-text">$${productosMother.precio}</p>
                    <p class="card-text">${productosMother.ventaja}</p>
                    <button id="${productosMother.id}" class="btn btn--4 btn-dark">Agregar</button>
                </div>
            </div>
        `

    cajaProductosMother.append(article);

    //!CREAMOS LA CONSTANTE BOTON PARA EL PRODUCTO
    const botonMOTHER = document.getElementById(`${productosMother.id}`);

    //!MEDIANTE LA CONSTANTE boton CREAMOS UNA FUNCION CON UN EVENTO
    botonMOTHER.addEventListener('click', () => {

        agregarAlCarritoMOTHER(productosMother.id);

    });

});

//!LLAMADO AL TEMPLATE RAMS.js
const cajaProductosRam = document.querySelector('#caja-productos-ram');

stockProductos_rams.forEach((productosRam) => {

    const article = document.createElement('article');
    article.classList.add('col-6', 'col-md-4');
    article.id = `${productosRam.id}`;

    article.innerHTML = `
            <div class="card">
                <img src=${productosRam.img} class="card-img-top"
                alt="procesador">
                <div class="card-body">
                    <h5 class="card-title">${productosRam.marca}</h5>
                    <p class="card-text">${productosRam.modelo}</p>
                    <p class="card-text">${productosRam.desc}</p>
                    <p class="card-text">$${productosRam.precio}</p>
                    <p class="card-text">${productosRam.especificaciones}</p>
                    <button id="${productosRam.id}" class="btn btn--4 btn-dark">Agregar</button>
                </div>
            </div>
        `

    cajaProductosRam.append(article);

    //!CREAMOS LA CONSTANTE BOTON PARA EL PRODUCTO
    const botonRAM = document.getElementById(`${productosRam.id}`);

    //!MEDIANTE LA CONSTANTE boton CREAMOS UNA FUNCION CON UN EVENTO
    botonRAM.addEventListener('click', () => {

        agregarAlCarritoRAM(productosRam.id);

    });

});