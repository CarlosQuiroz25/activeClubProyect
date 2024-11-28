import express from 'express';
const router = express.Router();
import reservationsController from '../controllers/reservationsController.js';

router.get('models/reservationModel.js', reservationsController.getReservations);
router.post('models/reservationModel.js', reservationsController.createReservation);
router.delete('models/reservationModel.js', reservationsController.deleteReservation);

export default router;

router.get('models/reservationModel.js', (req, res) => {
    res.json({ message: 'Ruta API funcionando correctamente' });
});



