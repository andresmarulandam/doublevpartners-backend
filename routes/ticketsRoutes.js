import express from 'express';
const router = express.Router();
import * as ticketsController from '../controllers/ticketsController.js';

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Crear un nuevo ticket.
 *     description: Crea un nuevo ticket con la información proporcionada.
 *     parameters:
 *       - name: user
 *         in: body
 *         description: Nombre del usuario para el ticket.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             user:
 *               type: string
 *     responses:
 *       201:
 *         description: Ticket creado exitosamente.
 *         content:
 *           application/json:
 *             example: { id: 1, user: "Usuario1", createdAt: "2022-01-01", updatedAt: "2022-01-01", status: "abierto" }
 */
router.post('/tickets', ticketsController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Obtener todos los tickets paginados.
 *     description: Obtiene una lista paginada de tickets.
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Número de página.
 *         required: false
 *         type: integer
 *       - name: perPage
 *         in: query
 *         description: Número de elementos por página.
 *         required: false
 *         type: integer
 *     responses:
 *       200:
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             example: { data: [{ id: 1, user: "Usuario1", createdAt: "2022-01-01", updatedAt: "2022-01-01", status: "abierto" }], total: 1, totalPages: 1 }
 */
router.get('/tickets', ticketsController.getAllTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Obtener un ticket por ID.
 *     description: Obtiene un ticket específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del ticket.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             example: { id: 1, user: "Usuario1", createdAt: "2022-01-01", updatedAt: "2022-01-01", status: "abierto" }
 *       404:
 *         description: Ticket no encontrado.
 */
router.get('/tickets/:id', ticketsController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Actualizar un ticket por ID.
 *     description: Actualiza la información de un ticket existente por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del ticket.
 *         required: true
 *         type: string
 *       - name: user
 *         in: body
 *         description: Nuevo nombre de usuario para el ticket.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             user:
 *               type: string
 *     responses:
 *       200:
 *         description: Ticket actualizado exitosamente.
 *         content:
 *           application/json:
 *             example: { id: 1, user: "NuevoUsuario", createdAt: "2022-01-01", updatedAt: "2022-01-02", status: "abierto" }
 *       404:
 *         description: Ticket no encontrado.
 */
router.put('/tickets/:id', ticketsController.updateTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Eliminar un ticket por ID.
 *     description: Elimina un ticket existente por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del ticket a eliminar.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Ticket eliminado exitosamente.
 *         content:
 *           application/json:
 *             example: { message: "Ticket eliminado correctamente" }
 *       404:
 *         description: Ticket no encontrado.
 */
router.delete('/tickets/:id', ticketsController.deleteTicketById);

export default router;
