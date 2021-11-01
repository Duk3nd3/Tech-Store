//!ACCESOS A HTML DESDE ESTAS FUNCIONES

//?FUNCION PARA ACCEDER AL REGISTRO DEL USUARIO
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

    } else if (document.getElementById("floatingUser").value == "test" || document.getElementById("floatingEmail").value == "test@test.com") {

        alert("Usted ya se encuentra registrado");

    } else {

        //!LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO
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

//?SEND SUBSCRIPTION MAIL

const subscription = () => {

    const emailSub = document.getElementById("email").value;

    if (emailSub == "") {

        alert("Por favor, complete todos los campos");

    } else {

        //!LUEGO DE REGISTRARSE LIMPIAMOS LA PANTALLA Y MOSTRAMOS EL REGISTRO EXITOSO

        homeButton.innerHTML = `
    
        <button class="btn-success-register btn-dark">Subscripción exitosa!</button><br><br>
        
        `

    }

};

//?FUNCION PARA CARRITO

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito');

const contadorCarrito = document.getElementById('contador-carrito');

const precioTotal = document.getElementById('precioTotal');

const carrito = [];

//*VACIAMOS CARRITO POR COMPLETO
botonVaciar.addEventListener('click', () => {

    carrito.length = 0;
    actualizarCarrito();

});

//*AGREGAMOS PRODUCTOS AL CARRITO
const agregarAlCarrito = (prodId) => {

    const item = stockProductos_vga.find((prod) => prod.id === prodId);
    //*CON PUSH CREAMOS EL ITEM DENTRO DEL CARRITO
    carrito.push(item);

    actualizarCarrito();

}

//*ELIMINAMOS PRODUCTOS DEL CARRITO
const eliminarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId);
    //*INDEXOF NOS RETORNA EL INDICE DEL ELEMENTO (item) DENTRO DEL CARRITO
    const indice = carrito.indexOf(item);
    //*CON SPLICE QUITAMOS EL ELEMENTO DEL CARRITO MEDIANTE EL IDENTIFICADOR INDICE
    carrito.splice(indice, 1);

    actualizarCarrito();

};

const actualizarCarrito = () => {

    //*VACIAMOS CARRITO PARA ACTUALIZARLO Y EVITAR QUE EL PRODUCTO SE DUPLIQUE
    contenedorCarrito.innerHTML = "";

    carrito.forEach( (productosVga) => {

        const div = document.createElement('div');
        div.className = "productoEnCarrito";

        div.innerHTML = `
        
            <p>${productosVga.marca}</p>
            <p>Precio: $${productosVga.precio}</p>
            <button onclick="eliminarDelCarrito(${productosVga.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `;

        //id="${productosVga.id}"

        contenedorCarrito.appendChild(div);

        //!ELIMINAMOS PRODUCTO DEL CARRITO
        // const eliminarProducto = document.getElementById(`${productosVga.id}`);

        //!MEDIANTE LA CONSTANTE eliminarProducto CREAMOS UNA FUNCION CON UN EVENTO
        /* eliminarProducto.addEventListener('click', () => {
    
        eliminarDelCarrito(productosVga.id);
            console.log('produdctosVga.id');
        }); */

    });
    
    //*AGREGAMOS CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO (VISTA)
    contadorCarrito.innerText = carrito.length;

    //*SUMAMOS PRECIO TOTAL DE LOS PRODUCTOS
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

};