// IMÁGENES DE FLORES
const imagenes = [
  "flor1.png",
  "flor2.png",
  "flor3.png"
];

// LLUVIA DE FLORES
function crearFlor() {
  const flor = document.createElement("img");

  flor.src = imagenes[Math.floor(Math.random() * imagenes.length)];
  flor.classList.add("flor-img");

  flor.style.left = Math.random() * window.innerWidth + "px";

  let size = Math.random() * 40 + 40;
  flor.style.width = size + "px";

  flor.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.body.appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 10000);
}

// GENERAR FLORES AUTOMÁTICAS
setInterval(crearFlor, 700);

// MOSTRAR CARTA + MÚSICA
function mostrarCarta() {
  document.getElementById("carta").style.display = "block";
  document.querySelector(".btn-amor").innerText = " con mucho amor para ti 💞💌";

  // activar música
  const musica = document.getElementById("musica");
  musica.play();
}