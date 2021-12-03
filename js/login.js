//!CONTROLES DE LOGIN SOBRE EL USUARIO
const login = () => {

    //!CON LOCALSTORAGE GETITEM GUARDAMOS EL VALOR DEL ULTIMO LOGIN
    let user = localStorage.getItem("user", document.getElementById("usuario").value);
    
    let pass = localStorage.getItem("password", document.getElementById("contraseña").value);

    //*VERIFICAMOS SI HAY DATOS EXISTENTES DENTRO DE LOCALSTORAGE, SINO EL USUARIO DEBERA REGISTRARSE ANTES DE INGRESAR
    if (document.getElementById("usuario").value=='' || document.getElementById("usuario").value==null || document.getElementById("usuario").value==undefined) {

        //*ALERTA ERROR AL REGISTRARSE SIN COMPLETAR LOS CAMPOS
        Swal.fire({

            icon: 'error',
            title: 'Usuario inexistente',
            text: 'Registrese por favor',
            confirmButtonText: 'Entendido',
            background: '#ffff',
            allowEscapeKey: true,
            allowOutsideClick: true,
            width: '20%',

        });

        //*SI HAY DATOS ALMACENADOS DENTRO DE LOCALSTORAGE (USUARIO Y CONTRASEÑA) LOS USAREMOS PARA INGRESAR
    } else if (document.getElementById("usuario").value == user && document.getElementById("contraseña").value == pass) {

        const welcome = document.getElementsByTagName('p')[0];
        
        //!MENSAJE LOGIN SUCCESS
        welcome.innerHTML = `
        <br><br>
        <span><button type="button" value="acceder" id="loginAccess" onclick="acceder()" class="btn-success-1 btn--1-ok">Acceder</button></span>
        `;

        const vanish = document.getElementById('vanish');

        vanish.innerHTML = `
        
        <div class="pop-up">
            <div class="pop-up-wrap">
                <div class="pop-up-title">
                </div>
                <div class="subcription">
                    <div class="line"></div>
                    <i class="far fa-times-circle" id="close"></i>
                    <div class="sub-content">
                        <h2>¿TE SUSCRIBISTE?</h2>
                        <p>Recibiras las mejores ofertas Tech del mercado.</p>
                        <form>
                            <input id="subsValidate" type="email" class="subs-email" name="email" placeholder="Escribe tu correo electronico">
                            <button class="btn-suscripcion btn--4" type="submit" onclick="sendMail()">Enviar Suscripcion</button>
                        </form>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        
        `;

    //*MENSAJE DE ERROR SI SE INTENTA ACCEDER CON USUARIO O CONTRASEÑA INCORRECTOS
    }else {

        const tryAgain = document.getElementsByTagName('p')[0];

        //!MENSAJE DE ERROR        
        tryAgain.innerHTML = `
        <br><br>
        <span><button type="button" value="error" id="loginError" 
        onclick="error()" class="btn-error-1 btn--2-error">Volver</button></span>
        `;

        const vanish = document.getElementById('vanish');
        vanish.innerHTML = `
        
        <div class="pop-up-error">
            <div class="pop-up-wrap-error">
                <div class="pop-up-title-error">
                </div>
                <div class="subcription">
                    <div class="line"></div>
                    <i class="far fa-times-circle" id="close"></i>
                    <div class="sub-content">
                        <h2>VERIFICA TUS DATOS</h2>
                        <h6>Es posible que tu usuario o contraseña sean incorrectos. ¿Sos nuevo/a?, ¡registrate!</h6>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        
        `;

    }

};

//!ENVIO DEL CORREO ELECTRONICO PARA LA SUSCRIPCION

//*FUNCION CORRESPONDIENTE A LA INTEGRACIÓN CON 'EmailJS'
(function() {

    emailjs.init("user_4oDCSJQQLETBYYhojeexC");

})();


//*FUNCION PARA ENVIAR EL CORREO DE SUSCRIPCION
const sendMail = () => {

    let tempParams = {

        from_name: "Tech Store Family",
        to_name: localStorage.getItem("email", document.getElementById("subsValidate").value)

    }

    //*PRIMER PARAMETRO IDGMAIL, SEGUNDO PARAMETRO IDTEMPLATE, TERCER PARAMETRO LA FUNCION TempPARAMS
    emailjs.send("service_4j2suvm", "template_y3u8pti", tempParams)

    //*CONTROL SOBRE EL PROCESO DE ENVIO
    .then(function(response) {

        console.log("SUCCESS!", response.status, response.text);

    }, function(error) {

        console.log("FAILED...", error);

    });

}