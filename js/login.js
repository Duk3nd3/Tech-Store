const login = () => {

    let user;
    let pass;

    user = document.getElementById('usuario').value;
    pass = document.getElementById('contraseña').value;

    if (user == 'test' && pass == '12345') {

        const welcome = document.getElementsByTagName('p')[0];

        welcome.innerHTML = `
        <br><br>
        <p class="bienvenida">Bienvenido :-)</p>
        <p class="bienvenida"><strong>¡${user}!</strong></p>
        `;

        //!MENSAJE LOGIN SUCCESS
        const vanish = document.getElementById('vanish');
        vanish.innerHTML = `<button class="btn-success-msg btn-dark">Login Success</button><br><br>
        <span><button type="button" value="acceder" id="loginAccess" onclick="acceder()" class="btn-success-1 btn--1-ok">Acceder</button></span>
        `

    } else {

        //!MENSAJE DE ERROR
        const vanish = document.getElementById('vanish');
        vanish.innerHTML = `<button class="btn-error-msg btn-danger">Login Error</button><br><br>
        <span><button type="button" value="error" id="loginError" 
        onclick="error()" class="btn-error-1 btn--2-error">Volver</button>
        `
    }

};