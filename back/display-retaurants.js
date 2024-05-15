require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

// Création du serveur
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


// Connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

app.get('/search', (_request, response) => {
    const sql = "SELECT * from restaurant"

    db.query(sql, (error, data) => {
        if (error) {
            return response.json(error)
        } else {
            console.log(response);
            return response.json(data)
        }
    })
});