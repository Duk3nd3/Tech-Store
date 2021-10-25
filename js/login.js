const login = () => {

    let user;
    let pass;

    user = document.getElementById('usuario').value;
    pass = document.getElementById('contraseña').value;


    if (user == 'test' && pass == '12345') {

        window.location = "./pages/intro.html";

    } else if (!isNaN(user)) {

        user = alert("No se permiten valores numericos dentro del campo usuario") 
        control = false;

    } else if (isNaN(nombre === null || nombre === undefined || nombre == "")) {

        user = alert("Digita un nombre de usuario correcto")
        control = false;

    }

};