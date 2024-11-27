
// Manejar reservas
const reservationForm = document.getElementById('reservation-form');
const reservationsList = document.getElementById('reservations-list');

// Manejar nueva reserva
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const classType = document.getElementById('class').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (classType && date && time) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Clase: ${classType}<br>
            Fecha: ${date}
            Hora: ${time}
            <button class="delete-btn">Eliminar</button>
        `;

        // Botón para eliminar reserva
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            reservationsList.removeChild(listItem);
        });

        reservationsList.appendChild(listItem);
        reservationForm.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        alert('Debes iniciar sesión primero');
        window.location.href = '/views/login.html'; // Redirige al login si no hay usuario
        return;
    }

    // Mostrar el nombre del usuario
    document.getElementById('user-nombre').textContent = usuario.nombre;
});
