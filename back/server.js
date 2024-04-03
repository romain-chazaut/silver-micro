const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // Importez body-parser

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get('/', (req, res) => {
  res.send('Bonjour Monde avec Express!');
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