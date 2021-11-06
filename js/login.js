const login = () => {

    //!CON LOCALSTORAGE GETITEM GUARDAMOS EL VALOR DEL ULTIMO LOGIN
    let user = localStorage.getItem("user", document.getElementById("usuario").value);
    
    let pass = parseInt(localStorage.getItem("password", document.getElementById("contraseña").value));

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
                            <input type="email" class="subs-email" placeholder="Escribe tu correo electronico">
                            <button class="subs-send" type="submit">Enviar Suscripcion</button>
                        </form>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        
        `;
    
        //*MENSAJE DE ERROR SI SE INTENTA ACCEDER CON USUARIO O CONTRASEÑA INCORRECTOS
    } else {


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
                        <p>Es posible que tu contraseña o usuario sean incorrectos.</p>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        
        `;

    }

};