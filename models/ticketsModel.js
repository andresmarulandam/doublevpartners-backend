import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  user: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['abierto', 'cerrado'], default: 'abierto' },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
