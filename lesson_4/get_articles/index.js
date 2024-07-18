const express = require('express');

const app = express();

const articles = [];

app.get('/articles', (req, res) => {
    res.send({ articles });
})

app.listen(3000);