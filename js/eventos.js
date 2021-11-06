//?ACCESOS A HTML DESDE ESTAS FUNCIONES

//!FUNCION PARA ACCEDER AL REGISTRO DEL USUARIO
const registro = () => {

    window.location = "./pages/formulario.html";

};

//!FUNCION PARA VOLVER AL TEMPLATE HOME
const error = () => {

    window.location = "index.html";

};

//!FUNCION PARA ACCEDER AL TEMPLATE INTRO
const acceder = () => {

    window.location = "./pages/intro.html";

};

//!FUNCION PARA ACCEDER AL TEMPLATE INTRO
const accesoRegistrado = () => {

    window.location = "./intro.html";

};

//!FUNCION PARA DESLOGUEARTE
const logout = () => {

    localStorage.clear();
    window.location = "/index.html";

};

//!FUNCION PARA EL REGISTRO DEL USUARIO
const registrarse = () => {

    if (document.getElementById("floatingUser").value == "" || document.getElementById("floatingEmail").value == "" || document.getElementById("floatingPassword").value == "") {

        //*ALERTA ERROR AL REGISTRARSE SIN COMPLETAR LOS CAMPOS
        Swal.fire({

            icon: 'error',
            title: 'Campos vacios',
            text: 'Complete todos los campos para finalizar con la validacion del registro',
            confirmButtonText: 'Entendido',
            background: '#000000',
            allowEscapeKey: true,
            allowOutsideClick: true,
            width: '20%',

        });

    } else if (document.getElementById("floatingUser").value == localStorage.getItem('user') || document.getElementById("floatingEmail").value == localStorage.getItem('email')) {

        //*ALERTA ERROR AL REGISTRARSE CON USUARIO Y/O EMAIL REPETIDOS
        Swal.fire({

            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o correo preexistente',
            confirmButtonText: 'Entendido',
            background: '#000000',
            allowEscapeKey: true,
            allowOutsideClick: true,
            width: '20%'

        });

    } else {

        //*ALMACENAMOS EN LOCALSTORAGE LOS VALORES DE LOS INPUTS EN VARIABLES
        localStorage.setItem("user", document.getElementById("floatingUser").value);
        
        localStorage.setItem("password", document.getElementById("floatingPassword").value);

        localStorage.setItem("email", document.getElementById("floatingEmail").value);

        //*LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO
        const limpiarForm = document.getElementById("formulario")
        limpiarForm.innerText = ""

        const homeButton = document.getElementById("backHome")
        homeButton.innerText = ""

        homeButton.innerHTML = `
    
            <div class="register-success">
            <img src="/images/register/registro-exitoso-preview.png" alt="registro exitoso">
            </div>
            <span><button type="button" value="acceder" id="loginAccess" onclick="accesoRegistrado()" class="btn-success-1-reg btn--1-ok-reg">Acceder</button></span>
        
        `

    }

}

//!SEND SUBSCRIPTION MAIL (VALIDACION)

let regSuccess = document.getElementById("vanish");

//*CON ESTE IF VERIFICAMOS QUE 'REGSUCCESS' NO SEA NULL ANTES DE AGREGAR UN EVENT LISTENER.
if (regSuccess) {

    regSuccess.addEventListener('submit', validarFormulario);
};

function validarFormulario(e) {
    e.preventDefault()

    vanish.innerHTML = `
        
    <div class="pop-up">
        <div class="pop-up-wrap">
            <div class="pop-up-submit">
            </div>
            <div class="subcription">
                <div class="line"></div>
                <i class="far fa-times-circle" id="close"></i>
                <div class="sub-content">
                    <h2>Suscripcion realizada con éxito!</h2>
                    <p>Solo recibiras correos una vez a la semana con las mejores ofertas e información del mundo tech.</p>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
    
    `;

}

//!FUNCION PARA CARRITO

const botonVaciar = document.getElementById('vaciar-carrito');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contador-carrito');

const precioTotal = document.getElementById('precioTotal');

//*ARRAY CARRITO
const carrito = [];

//!VACIAMOS CARRITO POR COMPLETO

//*CON ESTE IF VERIFICAMOS QUE 'BOTONVACIAR' NO SEA NULL ANTES DE AGREGAR UN EVENT LISTENER.
if (botonVaciar) {

    botonVaciar.addEventListener('click', () => {

        //*VACIAMOS EL ARRAY CARRITO DENTRO DEL MODAL Y MOSTRAMOS EL MENSAJE
        document.getElementById('vaciado').innerHTML = 'Carrito vaciado con exito!';

        carrito.length = 0;

        actualizarCarritoVGA();

    });
};

//!VGA carrito

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarritoVGA = (prodId) => {

    const item = stockProductos_vga.find((prod) => prod.id === prodId);

    //*CON PUSH CREAMOS EL ITEM DENTRO DEL CARRITO
    carrito.push(item);

    actualizarCarritoVGA();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoVGA = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    actualizarCarritoVGA();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoVGA = () => {

    contenedorCarrito.innerHTML = "";

    //*RECORREMOS NUESTRO CARRITO CON FOREACH
    carrito.forEach((productosVga) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `
        
            <p>${productosVga.marca}</p>
            <p>Precio: $${productosVga.precio}</p>
            <button id="${productosVga.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `;

        contenedorCarrito.appendChild(div);

        //*CREAMOS UNA FUNCION PARA EL BOTON DE ELIMINAR
        const eliminarProducto = (e) => {

            const prodId = e.target.id;

            eliminarDelCarritoVGA(prodId);

        };

        //*ELIMINAMOS PRODUCTO DEL CARRITO
        div.querySelector('.boton-eliminar').addEventListener('click', eliminarProducto);

    });

    //*AGREGAMOS CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO (VISTA)
    contadorCarrito.innerText = carrito.length;

    //*SUMAMOS PRECIO TOTAL DE LOS PRODUCTOS
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

};

//!PROCESADORES carrito

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarritoCORE = (prodId) => {

    const item = stockProductos_procesadores.find((prod) => prod.id === prodId);

    //*CON PUSH CREAMOS EL ITEM DENTRO DEL CARRITO
    carrito.push(item);

    actualizarCarritoCORE();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoCORE = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    actualizarCarritoCORE();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoCORE = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosCore) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `
        
            <p>${productosCore.marca}</p>
            <p>Precio: $${productosCore.precio}</p>
            <button id="${productosCore.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `;

        contenedorCarrito.appendChild(div);

        //*CREAMOS UNA FUNCION PARA EL BOTON DE ELIMINAR
        const eliminarProducto = (e) => {

            const prodId = e.target.id;

            eliminarDelCarritoCORE(prodId);

        };

        //*ELIMINAMOS PRODUCTO DEL CARRITO
        div.querySelector('.boton-eliminar').addEventListener('click', eliminarProducto);

    });

    //*AGREGAMOS CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO (VISTA)
    contadorCarrito.innerText = carrito.length;

    //*SUMAMOS PRECIO TOTAL DE LOS PRODUCTOS
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

};

//!MOTHERS carrito

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarritoMOTHER = (prodId) => {

    const item = stockProductos_mothers.find((prod) => prod.id === prodId);

    //*CON PUSH CREAMOS EL ITEM DENTRO DEL CARRITO
    carrito.push(item);

    actualizarCarritoMOTHER();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoMOTHER = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    actualizarCarritoMOTHER();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoMOTHER = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosMother) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `
        
            <p>${productosMother.marca}</p>
            <p>Precio: $${productosMother.precio}</p>
            <button id="${productosMother.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `;

        contenedorCarrito.appendChild(div);

        //*CREAMOS UNA FUNCION PARA EL BOTON DE ELIMINAR
        const eliminarProducto = (e) => {

            const prodId = e.target.id;

            eliminarDelCarritoMOTHER(prodId);

        };

        //*ELIMINAMOS PRODUCTO DEL CARRITO
        div.querySelector('.boton-eliminar').addEventListener('click', eliminarProducto);

    });

    //*AGREGAMOS CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO (VISTA)
    contadorCarrito.innerText = carrito.length;

    //*SUMAMOS PRECIO TOTAL DE LOS PRODUCTOS
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

};

//!RAMS carrito

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarritoRAM = (prodId) => {

    const item = stockProductos_rams.find((prod) => prod.id === prodId);

    //*CON PUSH CREAMOS EL ITEM DENTRO DEL CARRITO
    carrito.push(item);

    actualizarCarritoRAM();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoRAM = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    actualizarCarritoRAM();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoRAM = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosRam) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `
        
            <p>${productosRam.marca}</p>
            <p>Precio: $${productosRam.precio}</p>
            <button id="${productosRam.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `;

        contenedorCarrito.appendChild(div);

        //*CREAMOS UNA FUNCION PARA EL BOTON DE ELIMINAR
        const eliminarProducto = (e) => {

            const prodId = e.target.id;

            eliminarDelCarritoRAM(prodId);

        };

        //*ELIMINAMOS PRODUCTO DEL CARRITO
        div.querySelector('.boton-eliminar').addEventListener('click', eliminarProducto);

    });

    //*AGREGAMOS CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO (VISTA)
    contadorCarrito.innerText = carrito.length;

    //*SUMAMOS PRECIO TOTAL DE LOS PRODUCTOS
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

};

//!BTN VOLVER ARRIBA
const scrollUp = () => {

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {

        //*requestAnimationFrame NOS PREPARA LA FUNCIONA COMO UNA ANIMACIÓN
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));

        //*CON ESTE COMANDO EL BOTON DESAPARECE SIN LA NECESIDAD DE LLEGAR A LA ALTURA DE 500 (BARRA DE DESPLAZAMIENTO)
        buttonUp.style.transform = 'scale(0)';

    };

};

//*CODIGO DEL SCROLL
buttonUp = document.getElementById('button-up');

window.onscroll = () => {

    //*ACA GUARDAREMOS EN QUE POSICION ESTA EL SCROLL
    const scroll = document.documentElement.scrollTop;

    //*SI EL SCROLL ES MAYOR A 1000 PONEMOS EL BOTON ARRIBA VISIBLE
    if (scroll > 1000) {

        buttonUp.style.transform = 'scale(1)';

        //*SI EL SCROLL ES MENOR A 1000 PONEMOS EL BOTON ARRIBA OCULTO
    } else if (scroll < 1000) {

        buttonUp.style.transform = 'scale(0)';

    };

    document.getElementById('button-up').addEventListener('click', scrollUp);

};

//!EVENTO AL PRESIONAR UNA TECLA OCULTAMOS CARRITO
presionar_tecla = (e) => {

    //*EJECUCION DEL CODIGO AL PRESIONAR UNA TECLA
    tecla_esc = e.keyCode;

    if (tecla_esc == 27) {

        //*LLAMAMOS A LA VARIABLE DEL EVENTO botonCerrar 
        return botonCerrar.click();

    };

};

//*CAPTURAMOS EL EVENTO CON WINDOW
window.onkeydown = presionar_tecla;