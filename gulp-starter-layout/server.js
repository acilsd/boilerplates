/*eslint no-console: "off"*/
const express = require('express');
const http = require('http');
const app = express();

const port = process.env.PORT || 8090;

app.use(express.static(__dirname + '/build/'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

server.listen(port);

console.log('Server listening on:', port);
