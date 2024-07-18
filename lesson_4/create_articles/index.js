const express = require('express');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles });
})

app.post('/articles', (req, res) => {
    uniqueID +=1;

    articles.push({
    	id: uniqueID,
    	...req.body
    });
    res.send({
    	id: uniqueID
    })
})

app.listen(3000);


// {
// 	"title": "My first article",
// 	"content": "Some article content"
// }