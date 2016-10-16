/* eslint no-console: 0 */
import express from 'express';
import http from 'http';
import httpProxy from 'http-proxy';
import path from 'path';
import { port, apiHost, apiPort } from '../config/config-env';

const targetUrl = `http://${apiHost}:${apiPort}`;

const app = express();

const server = new http.Server(app);

const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }
  const json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

app.listen(port, (err) => {
  if (err) { console.error(err); }
  
  console.info(`Server listening on port ${port}!`);
});
