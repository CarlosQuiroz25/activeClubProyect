// Carrusel dinámico
const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

// Enlaces de redes sociales de los entrenadores
document.getElementById("entrenador1").addEventListener("click", () => {
  window.open("https://www.instagram.com/yei_aven19/", "_blank")
})
document.getElementById("entrenador2").addEventListener("click", () => {
  window.open("https://www.instagram.com/juanes_ac17/", "_blank")
})
document.getElementById("entrenador3").addEventListener("click", () => {
  window.open("https://www.instagram.com/afserna_70/", "_blank")
})
document.getElementById("entrenador4").addEventListener("click", () => {
  window.open("https://www.instagram.com/r_a_cristian/", "_blank")
})
document.getElementById("entrenador5").addEventListener("click", () => {
  window.open("https://www.instagram.com/c_ossa/", "_blank")
})
document.getElementById("entrenador6").addEventListener("click", () => {
  window.open("https://www.instagram.com/alejoparra92/", "_blank")
})

// Menú hamburguesa
document.getElementById('menu-icon').addEventListener('click', function() { 
  const navLinks = document.getElementById('nav-links'); 
  navLinks.classList.toggle('active'); });


