require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

// Configuracion global de rutas 
app.use(require('./routes/index'));

mongoose.connect(process.env.urlDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos en línea');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});