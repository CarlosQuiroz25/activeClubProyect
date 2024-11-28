
// Contacto
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Mensaje enviado con éxito!";
        mensaje.style.display = "block";

    setTimeout(() => {
        window.location.href = '/views/index.html'; // Redirige a la página de inicio
    }, 2000)
    });
  });