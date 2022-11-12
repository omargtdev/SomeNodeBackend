import express from 'express';

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Holi uwu');
    res.end();
});

export default app;