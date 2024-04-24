// const express = require('express');
// const bodyParser = require('body-parser');

// // création d'une instance de l'app express. 
// const app = express();

// // le middleware bodyParser traite les requêtes et analyse les réponses en json. 
// app.use(bodyParser.json());

// // définition d'une route get /api/hello
// app.get('/api/hello', (req, res) => {
//     // réponse avec un objet json contenant un message. 
//     res.json({ message: 'Hello, world!' });
// });

// // définition d'une route post /api/echo
// app.post('/api/echo', (req, res) => {
//     // récupération du message de la requête depuis le body de la requête.
//     const message = req.body.message;
//     // réponse avec un objet json contenant un message.
//     res.json({ echo: message });
// });

// // définition d'une route dynamique get pour féliciter un utilisateur spécifique.
// app.get('/api/greet/:name', (req, res) => {
//     // récupération du paramètre 'name'
//     const name = req.params.name;
//     // réponse avec un objet json contenant le message de salutation. 
//     res.json({ message: `Bonjour, ${name} !` });
// });

// // middleware gère les requêtes vers des ressources introuvables.
// app.use((req, res, next) => {
//     // envoi d'une réponse 404 et un message en json.
//     res.status(404).json({ error: 'Ressource introuvable' });
// });

// app.use((err, req, res, next) => {
//     // affichage de l'erreur en console.
//     console.error(err.stack);
//     // envoi d'une réponse 500 et un message en json.
//     res.status(500).json({ error: 'Erreur interne du serveur' });
// });

// // définition du port sur lequel le serveur écoute les connexions.
// const port = process.env.PORT || 3000;
// // démarrage du server express. 
// app.listen(port, () => {
//   console.log(`Serveur démarré sur le port ${port}`);
// });


// on instancie un objet team pour y stocker sous forme de tableau les informations de 4 joueurs. 
const team = {
    name: "Team A",
    players: [
        { name: "Player 1", position: "forward", age: 25 },
        { name: "Player 2", position: "midfielder", age: 27 },
        { name: "Player 3", position: "defender", age: 30 },
        { name: "Player 4", position: "goalkeeper", age: 28 }
    ]
};

function filterPlayersOver25(players) {
    const filteredPlayers = [];
    for (let i = 0; i < players.length; i++) {
        if (players[i].age > 25) {
            filteredPlayers.push(players[i]);
        }
    }
    return filteredPlayers;
}

const playersOver25 = filterPlayersOver25(team.players);

console.log("Players over 25 years old in team " + team.name + ":");
for (let i = 0; i < playersOver25.length; i++) {
    console.log("- " + playersOver25[i].name + ", " + playersOver25[i].position);
}

function calculateAverageAge(players) {
    let totalAges = 0;
    for (let i = 0; i < players.length; i++) {
        totalAges += players[i].age;
    }
    return totalAges / players.length;
}

console.log("Average age of team " + team.name + ": " + calculateAverageAge(team.players));

let youngestPlayer = team.players[0];
for (let i = 1; i < team.players.length; i++) {
    if (team.players[i].age < youngestPlayer.age) {
        youngestPlayer = team.players[i];
    }
}

console.log("The youngest player in team " + team.name + " is: " + youngestPlayer.name);