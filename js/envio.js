let province;
let total;
const IVA = 1.21;

//!CON ESTA CONSTANTE GENERAMOS EVENTO EN BOTON CALCULAR ENVIO

$('#botonCalculoEnvio').click(function () {

    const swalWithBootstrapButtons = Swal.mixin({

        customClass: {

            confirmButton: 'btn-out btn--2',
            cancelButton: 'btn-cancel btn--2-error'

        },

        buttonsStyling: false

    })

    swalWithBootstrapButtons.fire({

        inputPlaceholder: 'Ingresa el nombre de tu provincia',
        title: 'Digite su provincia',
        input: 'text',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ingresar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: false

    }).then((province) => {

        if (province.isConfirmed) {

            if (isNaN(province.value)) {

                //*VARIABLE PARA EL CALCULO DEl MONTO INGRESADO POR EL CLIENTE
                let totalPurchase;

                //?ESTE SWITCH CONTIENE TODAS LAS PROVINCIAS DE ARGENTINA Y SUS RESPECTIVOS RECARGOS PARA EL ENVIO DEL PRODUCTO
                switch (province.value) {

                    case 'buenos aires':
                        
                        totalPurchase = purchaseAmount().then((result) => {

                        shippingCost(1.2, result, IVA, province, total);

                        });
                        
                        break;

                    case 'misiones':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });

                        break;

                    case 'entre rios':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });

                        break;

                    case 'santa cruz':

                        totalPurchase = purchaseAmount().then((result) => {

                        shippingCost(1.6, result, IVA, province, total);

                        });

                        break;

                    case 'chaco':

                        totalPurchase = purchaseAmount().then((result) => {

                        shippingCost(1.3, result, IVA, province, total);

                        });
                        
                        break;

                    case 'cordoba':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'tierra del fuego':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.6, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'la pampa':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.2, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'caba':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.2, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'santa fe':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'mendoza':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.5, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'salta':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'tucuman':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'corrientes':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'jujuy':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'rio negro':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.6, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'san luis':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'neuquen':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.6, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'chubut':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.6, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'san juan':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.4, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'la rioja':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'catamarca':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.3, result, IVA, province, total);
    
                            });
                            
                            break;

                    case 'santiago del estero':

                        totalPurchase = purchaseAmount().then((result) => {

                            shippingCost(1.5, result, IVA, province, total);
    
                            });
                            
                            break;

                    default:

                        swal.fire({

                            title: 'Error',
                            title: 'La provincia no existe.',
                            icon: 'error',
                            showCancelButton: false,
                            confirmButtonText: 'Entendido',
                            reverseButtons: false,

                        })

                }

            } else if (province.value == '') {

                //*SI EL USUARIO INGRESA UN VALOR NUMERICO, LO RECHAZAMOS Y VOLVEMOS A PREGUNTAR.

                swal.fire({

                    title: 'Campo vacio.',
                    icon: 'warning',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 4000

                })

            } else {

                //*SI EL USUARIO INGRESA UN VALOR NUMERICO, LO RECHAZAMOS Y VOLVEMOS A PREGUNTAR.
                
                swal.fire({

                    title: 'Error',
                    title: 'No se permiten valores numericos.',
                    icon: 'error',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 4000

                })

            };

        } else if (

            //* Read more about handling dismissals below *//
            province.dismiss === Swal.DismissReason.cancel

        ) {

            swalWithBootstrapButtons.fire(

                'Cancelación exitosa',
                'No se realizo ningun cambio.',
                'info'

            )

        }

    })

});

//*!FUNCION QUE CALCULA EL COSTO DE ENVIO
const shippingCost = (envio, totalPurchase, IVA, province, total) => {

    //*EVITAMOS EL INGRESO DE CARACTERES ALFABETICOS CON !isNaN
    if ((!isNaN(totalPurchase)) && (totalPurchase <= 5000)) {

        total = (totalPurchase * IVA) * envio;

        Swal.fire({

            icon: 'success',
            title: '¡Muy bien!',
            html: `Tu provincia es <strong>${province.value}</strong> y con el envío tiene un precio final + IVA de $${total} pesos`,
            text: 'Compra finalizada con éxito, ¡muchas gracias.',
            footer: '<strong>Proceso finalizado</strong>',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 5000

        })

        //*SI EL PRECIO ES MAYOR A 5K EL ENVIO ES GRATIS
    } else if ((!isNaN(totalPurchase)) && (totalPurchase > 5000)) {

        total = (totalPurchase * IVA);

        Swal.fire({

            icon: 'success',
            title: '¡Muy bien!',
            html: `Tu provincia es <strong>${province.value}</strong> y el precio final + IVA con envio gratuito es de $${total} pesos`,
            text: 'Compra finalizada con éxito, ¡muchas gracias.',
            footer: '<strong>Proceso finalizado</strong>',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 5000

        })

        //!*DAMOS AVISO AL USUARIO SOBRE EL NO USO DE CARACTERES ALFABETICOS PARA ESTE CAMPO
    } else {

        console.log(totalPurchase);

        if (isNaN(totalPurchase)) {

            Swal.fire({

                icon: 'warning',
                title: 'Oops...',
                text: 'Solo se permiten valores numericos para este campo.',
                footer: '<strong>Datos incorrectos</strong>',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 4000

            })
        }

    }

}

//*!FUNCION PARA CREAR EL PROMPT
const purchaseAmount = () => {

    return new Promise((resolve, reject) => {

        swal.fire({

            customClass: {

                confirmButton: 'btn-out btn--2',
                cancelButton: 'btn-cancel btn--2-error'
    
            },
    
            buttonsStyling: false,

            icon: 'question',
            title: '¿Cuanto es el valor de la compra?',
            inputPlaceholder: 'Ingrese el valor de la compra',
            input: 'number',
            confirmButtonText: 'Ingresar!',
            // cancelButtonText: 'Cancelar!',
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            footer: '<strong>Compra superior a $5000 envío gratis</strong>'

        }).then((result) => {

            resolve(result.value);

        })
        
    })    
    
};