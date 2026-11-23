/* Ajuste para que se adapte al celu */
(function () {
  function ajustar() {
    var esCelular = window.matchMedia("(max-width: 768px)").matches;
    var anchoDiseno = esCelular ? 428 : 1512;
    var ancho = document.documentElement.clientWidth || window.innerWidth;
    document.documentElement.style.setProperty("--escala", ancho / anchoDiseno);
  }

  ajustar();
  window.addEventListener("resize", ajustar);
  document.addEventListener("DOMContentLoaded", ajustar);
})(); 