// script.js

// Función para cambiar entre modo claro y oscuro
function toggleModoOscuro() {
  document.body.classList.toggle('modo-oscuro');
  const secciones = document.querySelectorAll('section');
  secciones.forEach(seccion => {
	seccion.classList.toggle('modo-oscuro');
  });

  console.log("Cambio de modo");
}