require('dotenv').config();
const express = require('express')
const mysql = require('mysql')
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

app.get('/', (req, res) => {
    res.send('Bonjour Monde avec Express!');
});

app.get('/tables', (request, response) => {
    const sql = "SELECT * from restaurant_table"

    db.query(sql, (error, data) => {
        if (error) {
            return response.json(error)
        } else {
            return response.json(data)
        }
    })
});

app.post('/register', (request, response) => {
    const { firstname, lastname, email, password, role, created_at } = request.body;

    const sql = "INSERT INTO `user`(`firstname`, `lastname`, `email`, `password`, `role`, `created_at`) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [firstname, lastname, email, password, JSON.stringify(role), created_at], (error, data) => {
        if (error) {
            return response.json(error);
        } else {
            return response.json({ message: 'Utilisateur enregistré avec succès' });
        }
    });
});

app.post('/login', (request, response) => {
    const { email, password } = request.body;

    const sql = "SELECT * FROM `user` WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (error, data) => {
        if (error) {
            return response.json(error);
        } else {
            return response.json({ message: 'Connecté' });
        }
    });
});