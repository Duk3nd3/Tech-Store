//?ACCESOS A HTML DESDE ESTAS FUNCIONES

//!COLOCAMOS EL CURSOR SOBRE EL INPUT #usuario CON JQUERY
$(document).ready( () => {

    $('#usuario').trigger('focus');

} );

//!EJECUCION AL CARGAR LA PAGINA INICIAL CON JQUERY
$(document).ready( () => {

    $('.techStyle').css('opacity', '1');
    $('#tech-intro').append('<img src="/images/intro/tech-intro.gif">');
    $('#tech-intro img').css('width', '75%', 'height', '75%');

    //*AL PASAR EL MOUSE POR LA IMAGEN 'PC' ESTA SE OCULTA Y EN SU LUGAR APARECE UNA ANIMACION
    $(function(){
    
        $('#tech-intro').on({

            mouseenter: function(){

                $(this).css('opacity', '1');
                $('#tech-intro').hide();
                $('#tech-intro-explotion').append('<img src="/images/intro/explosion-tech-intro.gif">');
                $('#tech-intro-explotion img').css('width', '100%', 'height', '100%');

            },

            //*AL RETIRAR EL MOUSE VUELVE EL GIF 'PC' A SU POSICION ORIGINAL
            mouseleave: function(){

                $(this).css('opacity', '1');
                $('#tech-intro').show();
                $('#tech-intro-explotion img').remove();

            }

        });
    
    })

});

//!FUNCION PARA ACCEDER AL REGISTRO DEL USUARIO
const registro = () => {

    window.location = "./pages/formulario.html";

};

//!FUNCION PARA BOTON STOCK PRODUCTOS EN FOOTER
const checkStock = () => {

    window.location = "/pages/stock.html";

}

//!FUNCION PARA ACCEDER A EXCHANGE DEL USUARIO
const exchange = () => {

    window.location = "/pages/currencyExchange.html";

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

    window.location = "/index.html";

};

//!JQUERY PARA DESLOGUEARTE (ELIMINAR CUENTA)

$('#botonLogout').click(function () {

    const swalWithBootstrapButtons = Swal.mixin({

        customClass: {

            confirmButton: 'btn-out btn--2',
            cancelButton: 'btn-cancel btn--2-error'

        },

        buttonsStyling: false

    })

    swalWithBootstrapButtons.fire({

        title: '¿Estás seguro?',
        text: "¡Esta acción no podrá ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrala!',
        cancelButtonText: 'No, cancelo!',
        reverseButtons: false

    }).then((result) => {

        if (result.isConfirmed) {

            swalWithBootstrapButtons.fire({

                title: '¡Proceso finalizado!',
                text: 'Tu cuenta ha sido eliminada',
                icon: 'success',
                timer: 4000,
                timerProgressBar: true,
                allowEscapeKey: false,
                showConfirmButton: false,
                allowOutsideClick: false,
                footer: '<span class="redFooterLogout">Redireccionando al Inicio</span>'

            })

            //*VACIAMOS CREDENCIALES ACCESO EN lOCALSTORAGE CON LOGOUT
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            localStorage.removeItem('email');

            //*EVITAMOS QUE NOS ENVIE A LA PAGINA DE INICIO ENSEGUIDA LUEGO DE ELIMINAR LA CUENTA
            function redireccionar() {

                setTimeout("window.location = '/index.html'", 6000);

            }

            redireccionar();


        } else if (

            //*SIN CANCELA ESTA ACCION HACEMOS LO SIGUIENTE
            result.dismiss === Swal.DismissReason.cancel

        ) {

            swalWithBootstrapButtons.fire(
                'Cancelación exitosa',
                'Nos alegra tenerte de vuelta :)',
                'error'
            )

        }

    })

});

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
            backdrop: true,

        });

    } else if (document.getElementById("floatingUser").value == localStorage.getItem('user') || document.getElementById("floatingEmail").value == localStorage.getItem('email')) {

        //*ALERTA ERROR AL REGISTRARSE CON USUARIO Y/O EMAIL REPETIDOS
        Swal.fire({

            icon: 'warning',
            title: 'Oops...',
            text: 'Usuario o correo preexistente',
            confirmButtonText: 'Entendido',
            background: '#000000',
            allowEscapeKey: true,
            allowOutsideClick: true,
            width: '20%',
            backdrop: true,

        });

    } else {

        //*ALMACENAMOS EN LOCALSTORAGE LOS VALORES DE LOS INPUTS EN VARIABLES
        localStorage.setItem("user", document.getElementById("floatingUser").value);

        localStorage.setItem("password", document.getElementById("floatingPassword").value);

        localStorage.setItem("email", document.getElementById("floatingEmail").value);

        //*LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Registro exitoso',
            background: '#ffff',
            footer: '<span class="redFooterLogout">¡Bienvenid@!</span>',
            showConfirmButton: false,
            timer: 3500,
            backdrop: true,

        });

        const limpiarForm = document.getElementById("formulario")
        limpiarForm.innerText = ""

        const homeButton = document.getElementById("backHome")
        homeButton.innerText = ""

        homeButton.innerHTML = `
    
            <img style="position: absolute;" src="/images/register/background.gif" alt="">
            <div class="register-success">
            <img src="/images/register/hello-world-removebg-preview.png" alt=" hello world">
            <img src="/images/register/Tech-Store-removebg-preview.png" alt="registro exitoso">
            </div>
            <span><button type="button" value="acceder" id="loginAccess" onclick="accesoRegistrado()" class="btn-success-1-reg btn--1-ok-reg">Acceder a login</button></span>

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
                    <h2>¡Suscripcion realizada con éxito!</h2>
                    <h6>Solo recibiras correos una vez a la semana con las mejores ofertas e información del mundo tech.</h6>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
    
    `;

    
    Swal.fire({

        title: 'Procesando suscripción.',
        text: '¡Muchas gracias!.',
        imageUrl: '/images/register/email-api.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 4000,
        showConfirmButton: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,

      })

}

//!FUNCION PARA CARRITO

const botonVaciar = document.getElementById('vaciar-carrito');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contador-carrito');

const precioTotal = document.getElementById('precioTotal');

//*ARRAY CARRITO
let carrito = [];

//!VACIAMOS CARRITO POR COMPLETO

//*CON ESTE IF VERIFICAMOS QUE 'BOTONVACIAR' NO SEA NULL ANTES DE AGREGAR UN EVENT LISTENER.
if (botonVaciar) {

    botonVaciar.addEventListener('click', () => {

        if (carrito.length === 0) {

            //*QUITAMOS EL BOTON FINALIZAR COMPRA SI EL CARRITO ESTA VACIO
            $('#finalizarCompra').hide();

            //*VACIAMOS EL ARRAY CARRITO DENTRO DEL MODAL Y MOSTRAMOS EL MENSAJE
            $('#vaciado').html('<h3><strong>¡El carrito ya se encuentra vacio!</strong></h3>');

            //*OCULTAMOS EL BOTON 'VACIAR CARRITO' LUEGO DEL PROCESO
            $('#vaciar-carrito').hide();

            //*MOSTRAMOS UNA IMAGEN QUE ACOMPAÑA AL PROCESO
            $('#emptyCart').append("<img src='/images/modal_carrito/carrito_vacio-min.png'>");
            $('#emptyCart img').css('width', '25%', 'height', '25%');

            setTimeout(function(){

                $('#emptyCart').hide();
                $('#vaciar-carrito').show();
                $('#vaciar-carrito').html('<a href=""><strong>CLIC AQUI</strong></a>');

            }, 3000);

        } else {

            //*QUITAMOS EL BOTON FINALIZAR COMPRA SI EL CARRITO ESTA VACIO
            $('#finalizarCompra').hide();

            //*VACIAMOS EL ARRAY CARRITO DENTRO DEL MODAL Y MOSTRAMOS EL MENSAJE
            $('#vaciado').html('<h3><strong>¡El carrito se ha vaciado con éxito!</strong></h3>');

            //*OCULTAMOS EL BOTON 'VACIAR CARRITO' LUEGO DEL PROCESO
            $('#vaciar-carrito').hide();

            //*MOSTRAMOS UNA IMAGEN QUE ACOMPAÑA AL PROCESO
            $('#emptyCart').append("<img src='/images/modal_carrito/carrito_vaciado.png'>");
            $('#emptyCart img').css('width', '20%', 'height', '20%');

            setTimeout(function(){

                $('#emptyCart').hide();
                $('#vaciar-carrito').show();
                $('#vaciar-carrito').html('<a href=""><strong>CLIC AQUI</strong></a>');

            }, 3000);

        } 

        carrito.length = 0;

        //*VACIAMOS EL CARRITO ALMACENADO EN LOCALSTORAGE
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarritoVGA();
        actualizarCarritoMOTHER();
        actualizarCarritoCORE();
        actualizarCarritoRAM();

    });
};

//!BOTON FINALIZAR COMPRA

finalizarCompra.addEventListener('click', () => {

    if (carrito.length === 0) {

        Swal.fire({

            icon: 'error',
            title: 'Oops...',
            text: 'El carrito se encuentra vacío',
            footer: '<a href="">Caso contrario contacte al área de Soporte</a>'

            }) 

        } else {

            Swal.fire({

            icon: 'success',
            title: '¡Compra realizada con éxito!',
            text: '¡Muchas gracias por su compra!',
            footer: '<a href="">Enviaremos su factura de compra al correo registrado</a>'

        })

    }

})


//!VGA carrito

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarritoVGA = (prodId) => {

    const item = stockProductos_vga.find((prod) => prod.id === prodId);

    if (item) { 

        //*SI EL PRODUCTO EXISTE EN EL CARRITO, SE INCREMENTA EL CONTADOR
        const existe = carrito.find((prod) => prod.id === prodId);

        //*SUGAR SINTAX PARA EL PUSH DEL CARRITO
        existe ? existe.cantidad++ : carrito.push({...item, cantidad: 1});

     } 

    //*ALMACENAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    actualizarCarritoVGA();

    Toastify({
        
        text: "Producto agregado al carrito",
        className: "info",
        position: "right",
        avatar: "https://icon-library.com/images/success-icon-png/success-icon-png-11.jpg",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

      }).showToast();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoVGA = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    //*ELIMINAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

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

            <td><img src="${productosVga.img}" width=100></td>
            <p>${productosVga.marca}</p>
            <p><strong>Precio:</strong> $${productosVga.precio}</p>
            <p><strong>Cantidad:</strong> ${productosVga.cantidad}</p>
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

    if (item) { 

        //*SI EL PRODUCTO EXISTE EN EL CARRITO, SE INCREMENTA EL CONTADOR
        const existe = carrito.find((prod) => prod.id === prodId);

        //*SUGAR SINTAX PARA EL PUSH DEL CARRITO
        existe ? existe.cantidad++ : carrito.push({...item, cantidad: 1});

     } 

    //*AGREGAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoCORE();

    Toastify({

        text: "Producto agregado al carrito",
        className: "info",
        position: "right",
        avatar: "https://icon-library.com/images/success-icon-png/success-icon-png-11.jpg",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

      }).showToast();
      
}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoCORE = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    //*ELIMINAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoCORE();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoCORE = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosCore) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `

            <td><img src="${productosCore.img}" width=100></td>
            <p>${productosCore.marca}</p>
            <p><strong>Precio:</strong> $${productosCore.precio}</p>
            <p><strong>Cantidad:</strong> ${productosCore.cantidad}</p>
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

    if (item) { 

        //*SI EL PRODUCTO EXISTE EN EL CARRITO, SE INCREMENTA EL CONTADOR
        const existe = carrito.find((prod) => prod.id === prodId);

        //*SUGAR SINTAX PARA EL PUSH DEL CARRITO
        existe ? existe.cantidad++ : carrito.push({...item, cantidad: 1});

     } 

    //*AGREGAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoMOTHER();

    Toastify({

        text: "Producto agregado al carrito",
        className: "info",
        position: "right",
        avatar: "https://icon-library.com/images/success-icon-png/success-icon-png-11.jpg",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

      }).showToast();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoMOTHER = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    //*ELIMINAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoMOTHER();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoMOTHER = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosMother) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `

            <td><img src="${productosMother.img}" width=100></td>
            <p>${productosMother.marca}</p>
            <p><strong>Precio:</strong> $${productosMother.precio}</p>
            <p><strong>Cantidad:</strong> ${productosMother.cantidad}</p>
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

    if (item) { 

        //*SI EL PRODUCTO EXISTE EN EL CARRITO, SE INCREMENTA EL CONTADOR
        const existe = carrito.find((prod) => prod.id === prodId);

        //*SUGAR SINTAX PARA EL PUSH DEL CARRITO
        existe ? existe.cantidad++ : carrito.push({...item, cantidad: 1});

     } 

    //*AGREGAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoRAM();

    Toastify({

        text: "Producto agregado al carrito",
        className: "info",
        position: "right",
        avatar: "https://icon-library.com/images/success-icon-png/success-icon-png-11.jpg",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

      }).showToast();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarritoRAM = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);

    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);

    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    //*ELIMINAMOS EL PRODUCTO DE LA COMPRA EN LOCALSTORAGE
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarritoRAM();

};

//*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
const actualizarCarritoRAM = () => {

    contenedorCarrito.innerHTML = "";

    carrito.forEach((productosRam) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `

            <td><img src="${productosRam.img}" width=100></td>
            <p>${productosRam.marca}</p>
            <p><strong>Precio:</strong> $${productosRam.precio}</p>
            <p><strong>Cantidad:</strong> ${productosRam.cantidad}</p>
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

//!ACA VERIFICAMOS SI EN LOCALSTORAGE HAY PRODUCTOS GUARDADOS PARA MOSTRARLOS DENTRO DEL CARRITO CUANDO EL USUARIO INICIA SESION
let carritoConProductos = JSON.parse(localStorage.getItem('carrito'));

if (carritoConProductos) {

    carrito = carritoConProductos;
    actualizarCarritoMOTHER();
    actualizarCarritoCORE();
    actualizarCarritoRAM();
    actualizarCarritoVGA();

}

//!EVENTO AL PRESIONAR UNA TECLA OCULTAMOS CARRITO
presionar_tecla = (e) => {

    //*EJECUCION DEL CODIGO AL PRESIONAR UNA TECLA
    tecla_esc = e.keyCode;

    if (tecla_esc == 27) {

        //*LLAMAMOS A LA VARIABLE DEL EVENTO botonCerrar 
        return botonCerrar.click();

    } 

};

//*CAPTURAMOS EL EVENTO CON WINDOW
window.onkeydown = presionar_tecla;