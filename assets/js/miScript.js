//CONTENEDORES
const $divPrincipal = document.querySelector(".contenido-principal");
const $divComprar = document.getElementById("comprar-tickets");
//BOTONES PARA EL CAMBIO DE DIV
const $enlaceComprar = document.querySelector(".buy-ticket");
const $btnComprar = document.querySelector(".btn-buy-ticket");
//INPUTS DE FORM
const $nombre=document.getElementById("comprar-nombre");
const $apellido=document.getElementById("comprar-apellido");
const $email=document.getElementById("comprar-email");

const $cantidad=document.getElementById("cantidad-tickets");
const $categoria=document.getElementById("form-select");



$enlaceComprar.addEventListener("click", cambioDeDiv);
$btnComprar.addEventListener("click", cambioDeDiv);

function cambioDeDiv() {
  setTimeout(() => {

    $divPrincipal.classList.toggle("d-none");
    $divComprar.classList.toggle("d-none");
    resetValores()
  }, "100");
}

function resetValores(){
    $nombre.value="";
    $apellido.value="";
    $email.value="";
    $cantidad.value="";
}