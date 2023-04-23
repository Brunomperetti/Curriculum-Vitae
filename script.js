// Selecciona los elementos relevantes
const scrollContainer = document.querySelector(".scroll-container");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

// Agrega un evento de clic al botón de navegación izquierdo
prevButton.addEventListener("click", () => {
  // Obtiene el ancho de la ventana
  const windowWidth = window.innerWidth;
  // Obtiene la posición actual del desplazamiento
  const scrollPosition = scrollContainer.scrollLeft;
  // Calcula la nueva posición de desplazamiento restando el ancho de la ventana
  const newPosition = scrollPosition - windowWidth * 0.7;
  // Desplaza al nuevo posición con transición suave
  scrollContainer.scrollTo({
    left: newPosition,
    behavior: "smooth"
  });
});

// Agrega un evento de clic al bot
