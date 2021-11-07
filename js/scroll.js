//!BTN VOLVER ARRIBA
const scrollUp = () => {

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {

        //*requestAnimationFrame NOS PREPARA LA FUNCIONA COMO UNA ANIMACIÓN
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));

        //*CON ESTE COMANDO EL BOTON DESAPARECE SIN LA NECESIDAD DE LLEGAR A LA ALTURA DE 500 (BARRA DE DESPLAZAMIENTO)
        buttonUp.style.transform = 'scale(0)';

    };

};

//*CODIGO DEL SCROLL
buttonUp = document.getElementById('button-up');

window.onscroll = () => {

    //*ACA GUARDAREMOS EN QUE POSICION ESTA EL SCROLL
    const scroll = document.documentElement.scrollTop;

    //*SI EL SCROLL ES MAYOR A 1000 PONEMOS EL BOTON ARRIBA VISIBLE
    if (scroll > 1000) {

        buttonUp.style.transform = 'scale(1)';

        //*SI EL SCROLL ES MENOR A 1000 PONEMOS EL BOTON ARRIBA OCULTO
    } else if (scroll < 1000) {        
            
        buttonUp.style.transform = 'scale(0)';
    
    }

        document.getElementById('button-up').addEventListener('click', scrollUp);

};