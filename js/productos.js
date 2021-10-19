//!CLASE
class Productos {

    //*CONSTRUCTOR Y SUS PROPIEDADES
    constructor(id, video, procesador, memoria, valor, nombre) {

        this.id = id
        this.video = video
        this.procesador = procesador
        this.memoria = memoria
        this.valor = valor
        this.nombre = nombre

    }

    //*METODO
    mensaje() {

        console.log("COMPRA REALIZADA CON EXITO" + "\n" + "Placa de video: " + this.video + "\n" + "Procesador: " + this.procesador + "\n" + "Memoria RAM: " + this.memoria + "Precio: " + this.valor + "\n" + "Marca: " + this.nombre + ".");

    }

};

//!OBJETOS DE LA CLASE PRODUCTOS
const combo1 = new Productos(1, "1060", "i3", "DDR3", 130000, "GIGABYTE");
const combo2 = new Productos(2, "1070", "i5", "DDR4", 210000, "MSI");
const combo3 = new Productos(3, "1080", "i7", "DDR5", 250000, "EVGA");

//!FUNCION 'CONTROLAR'
const controlar = () => {

    let control = true;
    let nombre = prompt("Por favor digita tu nombre: ");

    do {

        if (nombre == "") {

            nombre = prompt("Digita un nombre de usuario correcto")
            control = false;

        } else {

            control = true;

        }

    } while (control == false)

    return nombre;

}

//!IMPRIMOS NOMBRE USUARIO INVOCANDO A LA FUNCION 'CONTROLAR'
const saludar = (nombre) => {
    alert(`Hola ${nombre}`)
};

//!ORDENAMOS POR ID LOS PODUCTOS CON EL METODO 'SORT'
function ordenarAsc() {


    const menor = [combo2.id, combo1.id, combo3.id];
    menor.sort(function(a, b) {return a-b});
    console.log(menor);

}

function ordenarDesc() {

    const mayor = [combo1.id, combo3.id, combo2.id];
    mayor.sort(function(a, b) {return b - a});
    console.log(mayor);

}

//!ARRAY BUNDLE 'COMBOS'
const bundle = [combo1, combo2, combo3];

//*SOLICITAMOS AL USUARIO EL INGRESO DEL PRODUCTO ADQUIRIDO
const comunicado = () => {

    let combos = parseInt(prompt("Ingrese el producto tech escogido (1, 2 o 3: "))

    let respuestaCombo = bundle.find(combo => combo.id === combos)

    alert(`Usted eligio la marca ${respuestaCombo.nombre}`)
    alert('¡Muchas gracias por comprar en TECH-STORE!')

};

//!AQUI COMENZAMOS CON LA EJECUCION DEL CODIGO LLAMANDO A LAS FUNCIONES

/* OBJETO GLOBAL WINDOWS ESPERA A QUE CARGUE EL HTML Y ESTILOS PARA LUEGO EJECUTAR LO QUE ESTA DENTRO  */
window.onload = function () {

    let nombreUsuario = controlar();

    saludar(nombreUsuario);

    comunicado();

    const accionBotonAsc = document.querySelector('#botonOrdenarAsc').addEventListener('click', ordenarAsc);

    const accionBotonDesc = document.querySelector('#botonOrdenarDesc').addEventListener('click', ordenarDesc);

};

