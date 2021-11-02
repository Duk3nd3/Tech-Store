//!ELEMENTOS CORRESPONDIENTES AL MODAL DEL CARRITO

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

//*ABRIMOS MODAL
botonAbrir.addEventListener('click', () => {

    contenedorModal.classList.toggle('modal-active')

});

//*CERRAMOS MODAL
botonCerrar.addEventListener('click', () => {

    contenedorModal.classList.toggle('modal-active')

});

//*BOTON CERRAR EN MODAL (x)
contenedorModal.addEventListener('click', () => {

    botonCerrar.click()

});

//*CON ESTA FUNCION EVITAMOS LA 'PROPAGACION' DEL EVENTO
modalCarrito.addEventListener('click', (event) => {

    event.stopPropagation()

});