const http = require("http");
const url = require("url");

let views = {
  "/": 0,
  "/about": 0,
};

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    views["/"]++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(`<h1>Корневая страница</h1>`);
    res.write(`<p>Просмотров: ${views["/"]}</p>`);
    res.write(`<a href="/about">Страница about</a>`);
    res.end();
  } else if (path === "/about") {
    views["/about"]++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(`<h1>Страница about</h1>`);
    res.write(`<p>Просмотров: ${views["/about"]}</p>`);
    res.write(`<a href="/">Корневая страница</a>`);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h1>Страница не найдена! :-(</h1>");
    res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
