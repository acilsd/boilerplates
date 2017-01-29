/*eslint no-console: "off"*/
const path = require('path');
const express = require('express');
const compression = require('compression');
const http = require('http');

const app = express();
const port = process.env.PORT || 8090;

app.use(compression());

app.use(express.static(__dirname + '/public/'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

server.listen(port, () => console.info(`Server listening on port: ${port}`));
