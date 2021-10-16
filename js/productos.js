alert("Ultimo paso antes de programar el envío");

//!EL USUARIO ELIJE EL COMBO QUE HA COMPRADO EN LA TIENDA
const comunicado = parseInt(prompt("Ingrese el combo de indumentaria escogido (1, 2 o 3: "));

//!CLASE
class Productos {

    //*CONSTRUCTOR y sus Propiedades
    constructor(talles, colores, telas) {

        this.talles = talles
        this.colores = colores
        this.telas = telas

    }

    //*METODO
    mensaje() {

        console.log("COMPRA REALIZADA CON EXITO" + "\n" + "Pantalon: " + this.talles + "\n" + "Color: " + this.colores + "\n" + "Tela: " + this.telas + ".");

    }

};

//!DEFINIMOS EL CONTENIDO DE LOS OBJETOS A CREADOS
const combo1 = new Productos("xl", "rojo", "modal");
const combo2 = new Productos("l", "amarillo", "algodon");
const combo3 = new Productos("s", "verde", "nylon");


//!ENTRADA REALIZADA POR EL USUARIO, VERIFICA EL IF
if (comunicado === 1) {

    combo1.mensaje();

} else if (comunicado === 2) {

    combo2.mensaje();

} else {

    combo3.mensaje();

}