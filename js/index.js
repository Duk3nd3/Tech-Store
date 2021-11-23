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

//!FUNCION PARA ACCEDER AL TEMPLATE INTRO
const acceder = () => {

    window.location = "./pages/intro.html";

};

//!FUNCION PARA VOLVER AL TEMPLATE HOME
const error = () => {

    window.location = "index.html";

};

//!FUNCION PARA ACCEDER AL REGISTRO DEL USUARIO
const registro = () => {

    window.location = "./pages/formulario.html";

};

//!FUNCION PARA ACCEDER AL TEMPLATE INTRO
const accesoRegistrado = () => {

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