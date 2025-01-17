// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file to any user that accesses the root URL.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./comments.html', null, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});