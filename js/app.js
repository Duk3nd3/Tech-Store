let province;
let total;
const IVA = 1.21;

//*!FUNCION PARA CREAR EL PROMPT
const purchaseAmount = () => {

    let purchase = parseInt(prompt('Ingresa el monto de tu compra para calcular el envío por favor'));

    return purchase;
};

//*!FUNCION QUE CALCULA EL COSTO DE ENVIO
const shippingCost = (envio, totalPurchase, IVA, province, total) => {

        //*EVITAMOS EL INGRESO DE CARACTERES ALFABETICOS CON !isNaN
    if ((!isNaN(totalPurchase)) && (totalPurchase <= 5000)) {

        total = (totalPurchase * IVA) * envio;
        alert(`Tu provincia es ${province} y con el envío tiene un precio final de $${total.toFixed(2)} pesos`);
        alert('Compra finalizada con éxito, ¡muchas gracias!');

        //*SI EL PRECIO ES MAYOR A 5K EL ENVIO ES GRATIS
    } else if ((!isNaN(totalPurchase)) && (totalPurchase > 5000)) {

        total = (totalPurchase * IVA);
        alert(`Tu provincia es ${province} y el precio final con envio gratuito es de $${total.toFixed(2)} pesos`);
        alert('Compra finalizada con éxito, ¡muchas gracias!');

        //!*DAMOS AVISO AL USUARIO SOBRE EL NO USO DE CARACTERES ALFABETICOS PARA ESTE CAMPO
    } else {

        alert('Solo se permiten valores numericos para este campo, intente nuevamente por favor.');
        askProvince();
        
    }

}

//!FUNCION SOBRE LA CUAL PREGUNTAMOS AL USUARIO A QUE PROVINCIA PERTENECE
const askProvince = () => {

    province = prompt('¿Cuál es tu provincia?').toLowerCase().trim();

    //*SINO ES UN VALOR ALFABETICO AVISAMOS AL USUARIO POR MEDIO DEL 'ELSE'
    if (isNaN(province)) {

        //*VARIABLE PARA EL CALCULO DEl MONTO INGRESADO POR EL CLIENTE
        let totalPurchase;

        //?ESTE SWITCH CONTIENE TODAS LAS PROVINCIAS DE ARGENTINA Y SUS RESPECTIVOS RECARGOS PARA EL ENVIO DEL PRODUCTO
        switch (province) {

            case 'buenos aires':

                totalPurchase = purchaseAmount();
                shippingCost(1.2, totalPurchase, IVA, province, total);
                break;

            case 'misiones':

                totalPurchase = purchaseAmount();
                shippingCost(1.3, totalPurchase, IVA, province, total);
                break;

            case 'entre rios':

                totalPurchase = purchaseAmount();
                shippingCost(1.3, totalPurchase, IVA, province, total);
                break;

            case 'santa cruz':

                totalPurchase = purchaseAmount();
                shippingCost(1.6, totalPurchase, IVA, province, total);
                break;

            case 'chaco':

                totalPurchase = purchaseAmount();
                shippingCost(1.3, totalPurchase, IVA, province, total);
                break;

            case 'cordoba':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'tierra del fuego':

                totalPurchase = purchaseAmount();
                shippingCost(1.6, totalPurchase, IVA, province, total);
                break;

            case 'la pampa':

                totalPurchase = purchaseAmount();
                shippingCost(1.2, totalPurchase, IVA, province, total);
                break;

            case 'caba':

                totalPurchase = purchaseAmount();
                shippingCost(1.2, totalPurchase, IVA, province, total);
                break;

            case 'santa fe':

                totalPurchase = purchaseAmount();
                shippingCost(1.3, totalPurchase, IVA, province, total);
                break;

            case 'mendoza':

                totalPurchase = purchaseAmount();
                shippingCost(1.5, totalPurchase, IVA, province, total);
                break;

            case 'salta':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'tucuman':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'corrientes':

                totalPurchase = purchaseAmount();
                shippingCost(1.3, totalPurchase, IVA, province, total);
                break;

            case 'jujuy':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'rio negro':

                totalPurchase = purchaseAmount();
                shippingCost(1.6, totalPurchase, IVA, province, total);
                break;

            case 'san luis':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'neuquen':

                totalPurchase = purchaseAmount();
                shippingCost(1.6, totalPurchase, IVA, province, total);
                break;

            case 'chubut':

                totalPurchase = purchaseAmount();
                shippingCost(1.6, totalPurchase, IVA, province, total);
                break;

            case 'san juan':

                totalPurchase = purchaseAmount();
                shippingCost(1.4, totalPurchase, IVA, province, total);
                break;

            case 'la rioja':

                totalPurchase = purchaseAmount();
                costoEnvio(1.3, totalPurchase, IVA, province, total);
                break;

            case 'catamarca':

                totalPurchase = purchaseAmount();
                costoEnvio(1.3, totalPurchase, IVA, province, total);
                break;

            case 'santiago del estero':

                totalPurchase = purchaseAmount();
                costoEnvio(1.5, totalPurchase, IVA, province, total);
                break;

            default:
                alert('La provincia ingresada no existe, intente nuevamente por favor.');
                askProvince();

        }

    } else {

        //*SI EL USUARIO INGRESA UN VALOR NUMERICO, LO RECHAZAMOS Y VOLVEMOS A PREGUNTAR.
        alert('No se permiten valores numericos para este campo, intente nuevamente por favor.');
        askProvince();
    };

};

//!CON ESTA CONSTANTE GENERAMOS EVENTO EN BOTON CALCULAR ENVIO
const accionBoton = document.querySelector('#botonCalculoEnvio').addEventListener('click', askProvince);