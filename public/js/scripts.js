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
