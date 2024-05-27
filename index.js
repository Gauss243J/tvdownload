const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Configurer le moteur de vues pour EJS
app.set('view engine', 'ejs');

// Définir le répertoire des fichiers statiques
app.use(express.static('public'));

// Route pour afficher la page de téléchargement
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour télécharger le fichier APK
app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'public', 'app.apk');
    res.download(file, 'app.apk', (err) => {
        if (err) {
            console.error("Erreur lors du téléchargement : ", err);
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
