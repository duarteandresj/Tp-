const VALORTICKET = 200;
//CONTENEDORES
const $divPrincipal = document.querySelector(".contenido-principal");
const $divComprar = document.getElementById("comprar-tickets");
//BOTONES PARA EL CAMBIO DE DIV
const $enlaceComprar = document.querySelector(".buy-ticket");
const $btnComprar = document.querySelector(".btn-buy-ticket");
//FORM de comprar tickets
const $form = document.getElementById("form-tickets");
//INPUTS DE FORM
const $nombre = document.getElementById("comprar-nombre");
const $apellido = document.getElementById("comprar-apellido");
const $email = document.getElementById("comprar-email");
const $cantidad = document.getElementById("cantidad-tickets");
const $categoria = document.getElementById("form-select");
const $btnReset = document.getElementById("btn-reset");
const $btnResumen = document.getElementById("btn-resumen");
const $span = document.getElementById("monto-pagar");

//Event Listeners
$enlaceComprar.addEventListener("click", cambioDeDiv);
$btnComprar.addEventListener("click", cambioDeDiv);
$btnReset.addEventListener("click", resetValoresFormulario);
$btnResumen.addEventListener("click", montoPagar);

function montoPagar() {
  if (comprobarCantidad()) {
    escribirSpan(
      parseFloat(
        $cantidad.value * VALORTICKET * (1 - obtencionDescuento())
      ).toFixed(2)
    );
  } else {
    escribirSpan("CANTIDAD NO ES VALIDA");
  }
}

function comprobarCantidad() {
  valor = $cantidad.value;
  if (isNaN(valor) || valor == "") {
    return false;
  } else {
    return true;
  }
}
function obtencionDescuento() {
  let descuento = 0;
  if ($categoria.value == "estudiante") {
    descuento = 0.8;
  } else if ($categoria.value == "trainee") {
    descuento = 0.5;
  } else if ($categoria.value == "junior") {
    descuento = 0.15;
  } else {
    descuento = 0;
  }
  return descuento;
}

//Span a escribir el monto a pagar
function escribirSpan(message) {
  $span.textContent = message;
}

//Cambia la vista entre contenido gral y la seccion de compra
function cambioDeDiv() {
  setTimeout(() => {
    $divPrincipal.classList.toggle("d-none");
    $divComprar.classList.toggle("d-none");
    resetValoresFormulario();
  }, "100");
}
function resetValoresFormulario() {
  $form.reset();
}
