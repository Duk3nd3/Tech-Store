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

//!FUNCION 'CONTROLAR' SOLICITAMOS NOMBRE AL USUARIO
const controlar = () => {

    let control = true;
    let nombre = prompt("Por favor digita tu nombre: ");

    do {

        if (isNaN(nombre === null || nombre === undefined || nombre == "")) {

            nombre = prompt("Digita un nombre de usuario correcto")
            control = false;

        } else if (!isNaN(nombre)) {

            nombre = prompt("No se permiten valores numericos dentro de este campo, ingresa tu nombre")
            control = false;

        } else {

            control = true;

        }

    } while (control == false)

    return nombre;

}

//!IMPRIMOS NOMBRE USUARIO INVOCANDO A LA FUNCION 'CONTROLAR'
const saludar = (nombre) => {
    alert(`Hola (L) ${nombre} (L) ¡Bienvenid@!`)
};

//!ORDENAMOS POR ID LOS PODUCTOS CON EL METODO 'SORT'

//*ASCENDENTE
function ordenarAsc() {

    const menor = [combo2.valor, combo1.valor, combo3.valor];
    menor.sort(function (a, b) {
        return a - b
    });
    console.log(menor);

}

//*DESCENDENTE
function ordenarDesc() {

    const mayor = [combo1.valor, combo3.valor, combo2.valor];
    mayor.sort(function (a, b) {
        return b - a
    });
    console.log(mayor);

}

//!ARRAY BUNDLE 'COMBOS'CONTIENE LOS PRODUCTOS
const bundle = [combo1, combo2, combo3];

//*SOLICITAMOS AL USUARIO EL INGRESO DEL PRODUCTO ADQUIRIDO (BUNDLE EN BASE A SU MARCA)
const comunicado = () => {

    let combos = parseInt(prompt("Ingrese el producto tech escogido (1, 2 o 3: "))

    let respuestaCombo = bundle.find(combo => combo.id === combos)

    alert(`Usted eligio la marca ${respuestaCombo.nombre}`)

    //*EN ESTE IF VERIFICAMOS EL COMBO SELECCIONADO Y MOSTRAMOS EL BUNDLE POR PANTALLA
    if (combos === 1) {

        combo1.mensaje();

    } else if (combos === 2) {

        combo2.mensaje();

    } else {

        combo3.mensaje();

    }

    alert('Recuerde calcular el envío con el botón "Calcular Envio"')
    alert('¡Muchas gracias por comprar en TECH-STORE!')

};

//!AQUI COMENZAMOS CON LA EJECUCION DEL CODIGO LLAMANDO A LAS FUNCIONES

/* OBJETO GLOBAL WINDOWS ESPERA A QUE CARGUE EL HTML Y ESTILOS PARA LUEGO EJECUTAR LO QUE ESTA DENTRO, EN ESTE CASO EL LLAMADO A TODAS LAS FUNCIONES */
window.onload = function () {

    let nombreUsuario = controlar();

    saludar(nombreUsuario);

    comunicado();

    const accionBotonAsc = document.querySelector('#botonOrdenarAsc').addEventListener('click', ordenarAsc);

    const accionBotonDesc = document.querySelector('#botonOrdenarDesc').addEventListener('click', ordenarDesc);

};

//!LLAMADO AL TEMPLATE STOCK.JS
const cajaProductos = document.querySelector('#caja-productos'); 

stockProductos.forEach((productos) => {

const article = document.createElement('article');
article.classList.add('row-cols-1', 'row-cols-md-3', 'g-4');
article.id = `${productos.id}`;

article.innerHTML = `
        <div class="col">
            <div class="card">
                <img src=${productos.img} class="card-img-top"
                alt="placa de video 590 RX">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p class="card-text">${productos.desc}</p>
                <p class="card-text">$${productos.precio}</p>
                <p class="card-text">${productos.disponible}</p>
                <a href="#"><button class="btn btn--4 btn-dark calcularEnvioBotones">Agregar al carrito</button></a>
            </div>
        </div>
    `

    cajaProductos.append(article);
});