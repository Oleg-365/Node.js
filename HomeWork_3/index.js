const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'counter.json');

app.use(express.static('./static'));

app.get('/api', (req, res) => {
  const url = req.url;

  const data = JSON.parse(fs.readFileSync(pathToFile));

  data[url] += 1;

  const newJSON = JSON.stringify(data, null, 2);

  fs.writeFileSync(pathToFile, newJSON);
  res.send(newJSON);
  console.log(newJSON);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
