
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('usuario', JSON.stringify({ nombre, email, password }));

    alert('Usuario registrado con éxito');
    window.location.href = '/views/login.html'; // Redirige a la página de login
});
