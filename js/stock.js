//!FUNCION PARA BOTON STOCK PRODUCTOS EN FOOTER
const checkStock = () => {

    window.location = "/pages/stock.html";

}

let contenido = document.querySelector('#contenido')

function traer() {

    fetch('/json/stock.json')

        .then(res => res.json())
        .then(datos => {
            
        tabla(datos)
    })
}

function tabla(datos) {
    
    contenido.innerHTML = ''

    for(let valor of datos){
        
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.marca }</td>
            <td>${ valor.modelo }</td>
            <td>${ valor.stock ? "Stock Disponible" : "Sin Stock" }</td>
        </tr>
        
        `
    }
}