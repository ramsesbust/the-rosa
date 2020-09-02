//Select element function 
//funcion de header mobile cerrar y abrir toggle
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open')
});