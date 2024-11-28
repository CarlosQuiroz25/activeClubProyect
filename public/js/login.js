
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Recuperar el usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.password === password) {
        window.location.href = '/views/perfil.html'; // Redirige a la página de perfil
    } else {
        alert('Usuario o contraseña incorrectas');
    }
});