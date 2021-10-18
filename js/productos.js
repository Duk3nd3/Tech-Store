//PRIMERO CLASES, DESPUES OBJETOS A CREAR DE ESA CLASE, LAS CONSTANTES (FUNCIONES), LUEGO LAS DECLARACIONES DE LAS FUNCIONES Y AL FINAL LAS INVOCACIONES A LAS FUNCIONES

//!CLASE
class Productos {

    //*CONSTRUCTOR y sus Propiedades
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
        
        console.log("COMPRA REALIZADA CON EXITO" + "\n" + "Placa de video: " + this.video + "\n" + "Procesador: " + this.procesador + "\n" + "Memoria RAM: " + this.memoria + ".");
        
    }
    
};

//!OBJETOS DE LA CLASE

const combo1 = new Productos(1, "1060", "i3", "DDR3", 130000, "DXTRUCHA");
const combo2 = new Productos(2, "1070", "i5", "DDR4", 210000, "GTAMD");
const combo3 = new Productos(3, "1080", "i7", "DDR5", 250000, "GTXNvidia");

//!FUNCION 
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

//!IMPRIMOS NOMBRE USUARIO INVOCANDO A LA FUNCION CONTROLAR
const saludar = (nombre) => {alert(`Hola ${nombre}`)};

//!ARRAY 
const mochilaCombos = [combo1, combo2, combo3];

const comunicado = () => {
    
    let combos = parseInt(prompt("Ingrese el combo tech escogido (1, 2 o 3: "));

    let respuestaCombo = mochilaCombos.find( combo => combo.id === combos )

    alert(`Usted eligio ${respuestaCombo.nombre}`)
        
};

//!AQUI COMENZAMOS CON LA EJECUCION DEL CODIGO LLAMANDO A LAS FUNCIONES

//!OBJETO GLOBAL WINDOWS ESPERA A QUE CARGUE EL HTML Y ESTILOS PARA LUEGO EJECUTAR LO QUE ESTA DENTRO 
window.onload = function() {
   
    let nombreUsuario = controlar();
    
    saludar(nombreUsuario);
    
    comunicado();
    
};
