import express from 'express';
const router = express.Router();
import * as ticketsController from '../controllers/ticketsController.js';

router.post('/tickets', ticketsController.createTicket);
router.get('/tickets', ticketsController.getAllTickets);
router.get('/tickets/:id', ticketsController.getTicketById);
router.put('/tickets/:id', ticketsController.updateTicketById);
router.delete('/tickets/:id', ticketsController.deleteTicketById);

export default router;
