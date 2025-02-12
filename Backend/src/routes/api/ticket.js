import express from 'express';
import ticketController from '../../controllers/ticketController.js';
import verifyJWT from '../../middleware/verifyJwt.js';
import { Admin, Manager, Employee } from '../../middleware/verifyRole.js';

const router = express.Router();

router
  .route('/')
  .get(verifyJWT, ticketController.getAllTicket)
  .post(verifyJWT, ticketController.createTicket);

router
  .route('/employee')
  .get(verifyJWT, ticketController.getTicketbyId)
  .post(verifyJWT, ticketController.createTicket);

router
  .route('/:id')
  .put(verifyJWT, ticketController.updateTicket)
  .delete(verifyJWT, Admin, ticketController.deleteTicket);

export default router;
