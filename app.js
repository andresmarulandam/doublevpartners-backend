import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ticketsRoutes from './routes/ticketsRoutes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swagger0ptions from './docs/swaggerOptions.js';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1/ticketdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

app.use('/api', ticketsRoutes);

const swaggerSpecs = swaggerJSDoc(swagger0ptions);
console.log(swaggerSpecs);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
