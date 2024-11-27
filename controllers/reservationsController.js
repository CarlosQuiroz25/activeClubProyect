import { getAllReservations, addReservation, deleteReservation as _deleteReservation } from '../models/reservationModel';

const ReservationsController = {
    getReservations(req, res) {
        res.json(getAllReservations());
    },
    createReservation(req, res) {
        const { classType, date, time } = req.body;
        const newReservation = { classType, date, time };
        const result = addReservation(newReservation);
        res.json(result);
    },
    deleteReservation(req, res) {
        const { index } = req.params;
        _deleteReservation(index);
        res.json({ message: 'Reserva eliminada correctamente.' });
    }
};

export default ReservationsController;
