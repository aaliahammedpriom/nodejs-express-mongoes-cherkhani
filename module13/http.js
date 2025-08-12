const http = require('http');

let x = `<h1>Hello, world!</h1>
  <p>This is a minimal HTML template.</p>`;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    res.end(x);
});

server.listen(3000);
