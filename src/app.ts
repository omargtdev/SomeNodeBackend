import { join } from 'path';

import express from 'express';
import cors from 'cors';

import routes from './routes';

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Receive also form data

app.use(express.static(join(__dirname, '..', 'public'))); // Public files

// Routes
app.use(routes);


export default app;