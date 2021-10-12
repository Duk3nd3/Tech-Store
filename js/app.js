let province;
let total;
const IVA = 1.21;

//FUNCION PARA CREAR EL PROMPT
const purchaseAmount = () => {

    let purchase = parseInt(prompt('Ingresa el monto de tu compra para calcular el envío por favor'));

    //ACA VERIFICAMOS, SI LA COMPRA ES MAYOR A 5000 EL ENVIO ES GRATIS
    if (purchase <= 5000) {

        return purchase;

    } else {

        alert(`Por la compra sobre un monto de $${purchase} el envío es gratis`);
    }

};

const askProvince = () => {

    //PREGUNTAMOS AL USUARIO A QUE PROVINCIA PERTENECE
    province = prompt('¿Cuál es tu provincia?').toLowerCase().trim();

    if (isNaN(province)) {

        //VARIABLE PARA EL CALCULO DEl MONTO INGRESADO POR EL CLIENTE
        let totalPurchase;

        //ESTE SWITCH CONTIENE TODAS LAS PROVINCIAS DE ARGENTINA Y SUS RESPECTIVOS RECARGOS PARA EL ENVIO DEL PRODUCTO
        switch (province) {
            case 'buenos aires':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.2;
                break;
            case 'misiones':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'entre rios':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'santa cruz':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.6;
                break;
            case 'chaco':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'cordoba':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'tierra del fuego':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.6;
                break;
            case 'la pampa':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.2;
                break;
            case 'caba':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.2;
                break;
            case 'santa fe':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'mendoza':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.5;
                break;
            case 'salta':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'tucuman':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'corrientes':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'jujuy':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'rio negro':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.6;
                break;
            case 'san luis':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'neuquen':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.6;
                break;
            case 'chubut':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.6;
                break;
            case 'san juan':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.4;
                break;
            case 'la rioja':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'catamarca':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.3;
                break;
            case 'santiago del estero':
                totalPurchase = purchaseAmount();
                total = (totalPurchase * IVA) * 1.5;
                break;
            default:
                alert('La provincia ingresada no existe.');
                askProvince();
        }

    } else {

        //SI EL USUARIO INGRESA UN VALOR NUMERICO, LO RECHAZAMOS Y VOLVEMOS A PREGUNTAR.
        alert('No se permiten valores numericos para este campo, intente nuevamente por favor.');
        askProvince();
    };

    //MOSTRAMOS RESULTADO AL USUARIO (SALIDA)
    alert(`Tu provincia es ${province} y con el envío tiene un precio final de $${total.toFixed(2)} pesos`);

};

//CON ESTA CONSTANTE GENERAMOS EVENTO EN BOTON CALCULAR ENVIO
const accionBoton = document.querySelector('#botonCalculoEnvio').addEventListener('click', askProvince);