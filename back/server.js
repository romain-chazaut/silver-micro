require('dotenv').config();
const express = require('express')
const mysql = require('mysql2') // Romain et Maelle utilisent mysql2 et Augustin mysql tout court
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
});

db.connect(error => {
    if (error) {
        console.error('Erreur de connexion à la base de données:', error);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

app.get('/', (req, res) => {
    res.send('Bonjour Monde avec Express!');
});

app.get('/tables', (_request, response) => {
    const sql = "SELECT * from restaurant_table";
    console.log('Requête pour obtenir toutes les tables du restaurant');

    db.query(sql, (error, data) => {
        if (error) {
            console.error('Erreur lors de la récupération des tables:', error);
            return response.status(500).json({ error: 'Erreur interne du serveur' });
        } else {
            console.log('Données récupérées:', data);
            return response.json(data);
        }
    });
});

app.post('/register', (request, response) => {
    const { firstname, lastname, email, password, role, created_at } = request.body;
    console.log('Tentative d\'enregistrement:', request.body);

    const sql = "INSERT INTO `user`(`firstname`, `lastname`, `email`, `password`, `role`, `created_at`) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [firstname, lastname, email, password, JSON.stringify(role), created_at], (error) => {
        if (error) {
            console.error('Erreur lors de l\'enregistrement:', error);
            return response.status(500).json({ error: 'Erreur interne du serveur' });
        } else {
            console.log('Utilisateur enregistré avec succès');
            return response.json({ message: 'Utilisateur enregistré avec succès' });
        }
    });
});

app.post('/login', (request, response) => {  // Correction ici, doit être POST pour accepter body
    const { email, password } = request.body;
    console.log('Tentative de connexion pour l\'email:', email);

    const sql = "SELECT * FROM `user` WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (error, data) => {
        if (error) {
            console.error('Erreur lors de la tentative de connexion:', error);
            return response.status(500).json({ error: 'Erreur interne du serveur' });
        } else {
            if (data.length > 0) {
                console.log('Connexion réussie pour:', data[0]);
                return response.json(data[0]);
            } else {
                console.log('Aucun utilisateur trouvé pour:', email);
                return response.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        }
    });
});