const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes');

const app = express(); 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});	

app.get('/', (req, res) => {
    res.send('Servidor Operando');
});