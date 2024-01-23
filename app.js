import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ticketsRoutes from './routes/ticketsRoutes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swagger0ptions from './docs/swaggerOptions.js';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(DB_CONNECTION_STRING, {
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
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
