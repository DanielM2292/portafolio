const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'JDM',
    password: '1004624494',
    database: 'portafolio_carros'
});

db.connect(err => {
    if (err) {
        console.log('Error al conectar con la base de datos', err);
    } else {
        console.log('Conexión establecida con éxito');
    }
});

app.get('/api/:marca', (req, res) => {
    const { marca } = req.params;
    const sql = `SELECT * FROM ${marca}`;

    db.query(sql, (err, results) => {
        if (err) {
            console.log('Error al obtener los carros de la base de datos');
        } else {
            res.json(results);
        }
    });
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});