//!FUNCION PARA ACCEDER AL TEMPLATE INTRO
const accesoRegistrado = () => {

    window.location = "/index.html";

};

//!EXPRESIONES REGULARES PARA VALIDAR EL USUARIO, EL PASSWORD Y EL CORREO
const usuario = /^[a-zA-Z]+$/i // Solo letras, con flag case insensitive (i).
const pass = /^.{4,10}$/ // De 4 a 10 digitos, cualquier caracter.
const correo = /^[a-z0-9_]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/ //Validamos la dirección de correo

//!AQUI GENERAMOS EL GUARDADO DE DATOS EN LOCALSTORAGE

//?OBJETO VACIO
let registeredUsers = [];

//?FUNCION PARA GENERAR USUARIO
const addUsersToSystem = () => {

    let user = document.getElementById("floatingUser").value;
    let pass = document.getElementById("floatingPassword").value;
    let email = document.getElementById("floatingEmail").value;

    let newUser = {

        user: user,
        pass: pass,
        email: email
    }
    
    registeredUsers.push(newUser);
    
    saveUsersToSystem();
    
}

//?FUNCION PARA REALIZAR CONSTROL EN LOCALSTORAGE
const getUsersFromSystem = () => {

    let storedList = localStorage.getItem('localUserList');

    if ((storedList == null) || (storedList == undefined)) {

        registeredUsers = [];

    }else {
        
        registeredUsers = JSON.parse(storedList);

    }

}

//?FUNCION PARA GUARDAR DATOS EN LOCALSTORAGE
const saveUsersToSystem = () => {

    localStorage.setItem('localUserList', JSON.stringify(registeredUsers));

}

//!FUNCION PARA EL REGISTRO DEL USUARIO
const registrarse = () => {

    //*VERIFICAMOS SI LOS CAMPOS ESTAN VACIOS
    if (document.getElementById("floatingUser").value == "" || document.getElementById("floatingEmail").value == "" || document.getElementById("floatingPassword").value == "" || document.getElementById("floatingPasswordConfirm").value == "") {

        //*ERROR AL REGISTRARSE SIN COMPLETAR LOS CAMPOS
        Swal.fire({

            imageUrl: '/images/register/cat_unknow.gif',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            icon: 'error',
            title: 'Campos vacios',
            text: 'Es necesario que todos los campos sean completados',
            confirmButtonText: 'Entendido',
            background: '#ffff',
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            timerProgressBar: true,
            timer: 6000,
            width: '20%',
            backdrop: true,

        });
     
    //*VERIFICAMOS SI LOS DATOS INGRESADOS SON CORRECTOS EN BASE A LAS 'EXPRESIONES REGULARES' DECLARAS AL INICIO
    }else if ((!usuario.test(document.getElementById("floatingUser").value)) || (!pass.test(document.getElementById("floatingPassword").value)) || (!pass.test(document.getElementById("floatingPasswordConfirm").value)) || (!correo.test(document.getElementById("floatingEmail").value))){

        //*DENTRO DEL SWITCH SEPARAMOS LOS CAMPOS PARA UN MEJOR CONTROL Y RETORNO DE ERROR PARA EL USUARIO
        switch (true) {

            //*CASO 1 USUARIO
            case (!usuario.test(document.getElementById("floatingUser").value)):

                Swal.fire({

                    imageUrl: '/images/register/oops.gif',
                    imageWidth: 200,
                    imageHeight: 100,
                    icon: 'warning',
                    title: 'Error',
                    text: 'Solo se permiten letras para el usuario',
                    footer: '<strong>Volvé a intentarlo</strong>',
                    background: '#ffff',
                    showConfirmButton: false,           
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    timer: 6000,
                    width: '20%',
                    backdrop: true,
        
                });
                break;
            
            //*CASO 2 PASSWORD
            case (!pass.test(document.getElementById("floatingPassword").value)):
                Swal.fire({

                    imageUrl: '/images/register/ohno.gif',
                    imageWidth: 200,
                    imageHeight: 100,
                    icon: 'warning',
                    title: 'Error',
                    text: 'La contraseña debe tener entre 4 y 10 caracteres',
                    footer: '<strong>Volvé a intentarlo</strong>',
                    background: '#ffff',
                    showConfirmButton: false,           
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    timer: 6000,
                    width: '20%',
                    backdrop: true,
        
                });
                break;

            //*CASO 3 CORREO
            case (!correo.test(document.getElementById("floatingEmail").value)):

                Swal.fire({

                    imageUrl: '/images/register/ujum.gif',
                    imageWidth: 200,
                    imageHeight: 100,
                    icon: 'error',
                    title: 'Error',
                    text: 'El correo ingresado no es válido',
                    footer: '<strong>Volvé a intentarlo</strong>',
                    background: '#ffff',
                    showConfirmButton: false,           
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    timer: 6000,
                    width: '20%',
                    backdrop: true,
        
                });
                break;

        }

    //*VERIFICAMOS SI LOS DATOS DEL REGISTRO YA SE ENCUENTRA ALMACENADOS EN LOCALSTORAGE
    }else if (document.getElementById("floatingUser").value == localStorage.getItem('user') || document.getElementById("floatingEmail").value == localStorage.getItem('email')) {

        //*ALERTA ERROR AL REGISTRARSE CON USUARIO Y/O EMAIL EXISTENTES
        Swal.fire({

            imageUrl: '/images/register/exist_user.gif',
            imageWidth: 200,
            imageHeight: 100,
            icon: 'warning',
            title: 'Oops...',
            text: 'Usuario o correo preexistente',
            showConfirmButton: false,
            footer: '<strong>Verifica los datos</strong>',
            background: '#ffff',
            showConfirmButton: false,           
            allowEscapeKey: false,
            allowOutsideClick: false,
            timerProgressBar: true,
            timer: 6000,
            width: '20%',
            backdrop: true,

        });

    //*ACA VALIDAMOS QUE LA CONTRASEÑA Y LA CONFIRMACION DE LA MISMA, COINCIDEN
    }else if ((document.getElementById("floatingPassword").value) !== (document.getElementById("floatingPasswordConfirm").value)) {

            Swal.fire({

                imageUrl: '/images/register/ohno.gif',
                imageWidth: 200,
                imageHeight: 100,
                icon: 'warning',
                title: 'Error',
                text: 'Verifica que ambas contraseñas coincidan por favor',
                footer: '<strong>Volvé a intentarlo</strong>',
                background: '#ffff',
                showConfirmButton: false,           
                allowEscapeKey: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                timer: 6000,
                width: '20%',
                backdrop: true,
    
            });

    }else {

        //*ALMACENAMOS EN LOCALSTORAGE LOS VALORES DE LOS INPUTS EN VARIABLES
        
        addUsersToSystem();
        
        getUsersFromSystem();
        
        saveUsersToSystem();

        // localStorage.setItem("user", document.getElementById("floatingUser").value);

        // localStorage.setItem("password", document.getElementById("floatingPassword").value);

        // localStorage.setItem("email", document.getElementById("floatingEmail").value);

        //*LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO
        Swal.fire({

            imageUrl: '/images/register/success_register.gif',
            imageWidth: 200,
            imageHeight: 200,
            icon: 'success',
            title: 'Registro exitoso',
            footer: '<span class="redFooterLogout">¡Bienvenid@!</span>',
            background: '#ffff',
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            timerProgressBar: true,
            timer: 4000,
            width: '20%',
            backdrop: true,

        });

        const limpiarForm = document.getElementById("formulario")
        limpiarForm.innerText = ""

        const homeButton = document.getElementById("backHome")
        homeButton.innerText = ""

        homeButton.innerHTML = `

            <div class="register-success">
                <img style="position: absolute;" src="/images/register/background-2.gif" alt="">
            
                <img src="/images/register/Tech-Store-removebg-preview.png" alt="registro exitoso">
            </div>
            <span><button type="button" value="acceder" id="loginAccess" onclick="accesoRegistrado()" class="btn-success-1-reg btn--1-ok-reg">Acceder a login</button></span>
            <div class="register-success">
                <img style="position: absolute;" src="/images/register/background-3.gif" alt="">
            </div>

        `

    }

}

//!ANULAMOS EVENTO AL PRESIONAR LA TECLA F5 o ESC DE ESA MANERA NO SE RECARGA EL HTML DEL FORMULARIO
presionar_tecla = (e) => {

    //*EJECUCION DEL CODIGO AL PRESIONAR UNA TECLA
    tecla_esc = e.keyCode;
    tecla_f5 = e.keyCode;

    if ((tecla_esc == 27) || (tecla_f5 == 116)) {

        //*LLAMAMOS A LA VARIABLE DEL EVENTO botonCerrar 
        return false;

    } 

};

//*CAPTURAMOS EL EVENTO CON WINDOW
window.onkeydown = presionar_tecla;