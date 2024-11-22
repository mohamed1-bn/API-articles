const express = require('express');
const app = express();
const port = 8000; 
app.use(express.json());
let articles = [
    { id: 1, title: "Bonjour", content: "Contenu 1", author: "Omar" },
    { id: 2, title: "Hello", content: "Contenu 2", author: "OBY" }
];
app.get('/', (req, res) => {
    res.send('Connexion réussi');
});
app.get('/articles', (req, res) => {
    res.json(articles);
});
app.get('/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) {
        return res.status(404).send('Article non trouvé');
    }
    res.json(article);
});

app.post('/articles', (req, res) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

app.patch('/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) {
        return res.status(404).send('Article non trouvé');
    }
    if (req.body.title) article.title = req.body.title;
    if (req.body.content) article.content = req.body.content;
    if (req.body.author) article.author = req.body.author;

    res.json(article);
});
app.delete('/articles/:id', (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Article non trouvé');
    }

    articles.splice(index, 1);
    res.send('Article supprimé');
});
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
