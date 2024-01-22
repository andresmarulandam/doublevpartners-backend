import Ticket from '../models/ticketsModel.js';

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
    const tickets = await Ticket.find();
    res.json(tickets);
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
