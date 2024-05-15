require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'origin');
    next();
});

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Bonjour Monde avec Express!');
});

// connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

app.get('/search', (_request, response) => {
    const sql = "SELECT * from restaurant";

    db.query(sql, (error, data) => {
        if (error) {
            return response.json(error)
        } else {
            console.log(response);
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
            if (data.length > 0) {
                return response.json(data[0]);
            } else {
                return response.json({ message: 'Utilisateur non trouvé' });
            }
        }
    });
});

app.post('/update', (request, response) => {
    const { firstname, lastname, email, password } = request.body;

    const sql = "UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id =?";

    db.query(sql, [firstname, lastname, email, password], (error, data) => {
        if (error) {
             return response.json(error);
        } else {
             return response.json({ message: 'Utilisateur mis à jour avec succès' });
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});