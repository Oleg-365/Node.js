const express = require('express');

const app = express();

app.use(express.json());

app.put('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a PUT request!</h1>');
})

app.listen(3000);