// Modelo para manejar reservas
const reservations = [];

const ReservationModel = {
    addReservation(reservation) {
        reservations.push(reservation);
        return reservation;
    },
    getAllReservations() {
        return reservations;
    },
    deleteReservation(index) {
        reservations.splice(index, 1);
    }
};

export default ReservationModel;
