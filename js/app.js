let provincia;
let total;
const IVA = 1.21;

//FUNCION PARA CREAR EL PROMPT Y LLAMARLO EN LOS IF ANIDADOS
const monto = () => {

    let compra = parseInt(prompt('Ingresa el monto de tu compra para calcular el envío por favor'));
    return compra;

};

const preguntar = () => {

    if (isNaN(provincia)) {

        //PREGUNTAMOS AL USUARIO A QUE PROVINCIA PERTENECE
        provincia = prompt('¿Cuál es tu provincia?').toLowerCase().trim();

        //VARIABLE PARA EL CALCULO DEl MONTO INGRESADO POR EL CLIENTE
        let totalCompra;

        //ESTE SWITCH CONTIENE TODAS LAS PROVINCIAS DE ARGENTINA Y SUS RESPECTIVOS RECARGOS PARA EL ENVIO DEL PRODUCTO
        switch (provincia) {
            case 'buenos aires':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.2;
                break;
            case 'misiones':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'entre rios':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'santa cruz':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.6;
                break;
            case 'chaco':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'cordoba':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'tierra del fuego':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.6;
                break;
            case 'la pampa':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.2;
                break;
            case 'caba':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.2;
                break;
            case 'santa fe':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'mendoza':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.5;
                break;
            case 'salta':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'tucuman':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'corrientes':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'jujuy':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'rio negro':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.6;
                break;
            case 'san luis':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'neuquen':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.6;
                break;
            case 'chubut':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.6;
                break;
            case 'san juan':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.4;
                break;
            case 'la rioja':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'catamarca':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.3;
                break;
            case 'santiago del estero':
                totalCompra = monto();
                total = (totalCompra * IVA) * 1.5;
                break;
            default:
                alert('La provincia ingresada no existe.');
                preguntar();
        }

    } else {

        //SI EL USUARIO INGRESA UN VALOR NUMERICO, LO RECHAZAMOS Y VOLVEMOS A PREGUNTAR.
        alert('Tampoco se permiten valores numericos para este campo, intente nuevamente por favor.');
        preguntar();
    };

    //MOSTRAMOS RESULTADO AL USUARIO (SALIDA)
    alert(`Tu provincia es ${provincia} y con el envío tiene un precio final de $${total.toFixed(2)} pesos`);

};

//CON ESTA CONSTANTE GENERAMOS EVENTO EN BOTON CALCULAR ENVIO
const accionBoton = document.querySelector('#botonCalculoEnvio').addEventListener('click', preguntar);