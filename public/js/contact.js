
// Contacto
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Tu solicitud ha sido enviada con éxito!";
        mensaje.style.display = "block";

    setTimeout(() => {
        window.location.href = '/views/index.html'; // Redirige a la página de inicio
    }, 3000)
    });
  });