const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idSchema, articleSchema } = require('./validation/schema');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

/**
* Получить все статьи
*/
app.get('/articles', (req, res) => {
    res.send({ articles });
})

/**
* Получить коокретную статью
*/
app.get('/articles/:id', checkParams(idSchema), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
    	res.send({article});
    } else {
    	res.status(404);
    	res.send({ articles: null });
    }
})

/**
* Создание статьи
*/
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID +=1;

    articles.push({
    	id: uniqueID,
    	...req.body
    });

    res.send({
    	id: uniqueID
    })
})


/**
* Обновление статьи
*/
app.put('/articles/:id', checkParams(idSchema), checkBody(articleSchema), (req, res) => {
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


/**
* Удаление статьи
*/
app.delete('/articles/:id', checkParams(idSchema), (req, res) => {
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

/**
* Обработка несуществующих роутов
*/
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found'
    })
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