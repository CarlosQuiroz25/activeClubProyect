import { Router } from 'express';
const router = Router();
import { getReservations, createReservation, deleteReservation } from '../controllers/reservationsController';

router.get('/reservations', getReservations);
router.post('/reservations', createReservation);
router.delete('/reservations/:index', deleteReservation);

export default router;
