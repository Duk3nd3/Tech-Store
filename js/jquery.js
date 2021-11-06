/*$("#IdEtiqueta").click(function(){

    Swal.mixin({

        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']

    }).queue({

        title: 'Pregunta 1',
        text: '¿Color favorito?'

    },
    {

        title: 'Pregunta 2',
        text: '¿Animal favorito?'

    },
    {

        title: 'Pregunta 3',
        text: '¿Deporte favorito?'

    }).then((result) => {

        if (result.value) {

            Swal.fire({

                title: 'Respuestas',
               /*  html:
                    '<b>Color:</b> ' + result.value[0] + '<br>' +
                    '<b>Animal:</b> ' + result.value[1] + '<br>' +
                    '<b>Deporte:</b> ' + result.value[2],
                confirmButtonText: 'Entendido' 
                html:
                    'Tus respuesta: <pre><code>' +
                    JSON.stringify(result.value) +
                    '</code></pre>',
                    confirmButtonText: 'Entendido'

            })

        }

    });

    });*/