const express = require('express');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles });
})

app.get('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
    	res.send({article});
    } else {
    	res.status(404);
    	res.send({ articles: null });
    }
})

app.post('/articles', (req, res) => {

    if (!req.body.title) {
        return res.status(400).send({error: 'Invalid title'}); // 400 - пользователь сделал что-то не так
    }
    if (!req.body.content) {
        return res.status(400).send({error: 'Invalid content'});
    }
    if (req.body.title.length <= 5) {
        return res.status(400).send({error: 'The title must be more then 5 characters'});
    }
    if (req.body.content.length <= 10) {
        return res.status(400).send({error: 'The content must be more then 10 characters'});
    }

    uniqueID +=1;

    articles.push({
    	id: uniqueID,
    	...req.body
    });
    res.send({
    	id: uniqueID
    })
})

app.put('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article});
    } else {
        res.status(404);
        res.send({ articles: null });
    }
})

app.delete('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({article});
    } else {
        res.status(404);
        res.send({ articles: null });
    }
})

app.listen(3000);


// {
// 	"title": "My first article",
// 	"content": "Some article content"
// }

// {
//  "title": "New title",
//  "content": "New content"
// }