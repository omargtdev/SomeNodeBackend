import express from 'express';
import { join } from 'path';
import routes from './routes';

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Receive also form data

app.use(express.static(join(__dirname, '..', 'public'))); // Public files

// Routes
app.use(routes);


export default app;