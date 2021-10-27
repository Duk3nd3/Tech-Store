//!ACCESOS A HTML DESDE ESTAS FUNCIONES

//?FUNCION PARA EL REGISTRO DEL USUARIO
const registro = () => {

    window.location = "./pages/formulario.html";

};

//?FUNCION PARA VOLVER AL TEMPLATE HOME
const error = () => {

    window.location = "index.html";

};

//?FUNCION PARA ACCEDER AL TEMPLATE INTRO
const acceder = () => {

    window.location = "./pages/intro.html";

};

//?FUNCION PARA ACCEDER AL TEMPLATE INTRO
const accesoRegistrado = () => {

    window.location = "./intro.html";

};

//?FUNCION PARA DESLOGUEARTE
const logout = () => {

    localStorage.clear();
    window.location = "/index.html";

};

//?FUNCION PARA EL REGISTRO DEL USUARIO
const registrarse = () => {


    if (document.getElementById("floatingUser").value == "" || document.getElementById("floatingEmail").value == "" || document.getElementById("floatingPassword").value == "") {

        alert("Por favor, complete todos los campos");

    } else {

        //!LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO
        const limpiarForm = document.getElementById("formulario")
        limpiarForm.innerText = ""

        const homeButton = document.getElementById("backHome")
        homeButton.innerText = ""

        homeButton.innerHTML = `
    
        <button class="btn-success-register btn-dark">Registro exitoso!</button><br><br>
            <span><button type="button" value="acceder" id="loginAccess" onclick="accesoRegistrado()" class="btn-success-1 btn--1-ok">Acceder</button></span>
        
        `
    }

}