import Ticket from '../models/ticketsModel.js';
import pagination from '../utils/utils.js';

export const createTicket = async (req, res) => {
  const { user } = req.body;
  try {
    const newTicket = new Ticket({ user });
    const savedTicket = await newTicket.save();
    res.json(savedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el ticket.' });
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const tickets = await pagination(Ticket.find(), page, perPage);
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al recuperar los tickets.' });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado.' });
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al recuperar el ticket.' });
  }
};

export const updateTicketById = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket no encontrado.' });
    }

    res.json(updatedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el ticket.' });
  }
};

export const deleteTicketById = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);

    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket no encontrado.' });
    }

    res.json({ message: 'Ticket eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el ticket.' });
  }
};
