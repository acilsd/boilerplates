/* eslint no-console: 0 */
import express from 'express';
import http from 'http';
import httpProxy from 'http-proxy';
import path from 'path';
import PrettyError from 'pretty-error';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import {
  createStore,
} from '../client/redux/createStore';
import getRoutes from '../client/routes';
import Default from '../client/views/Default';
import { port, apiHost, apiPort } from '../config/config-env';
//our global env-var for wds
global.__CLIENT__ = false;

const targetUrl = `http://${apiHost}:${apiPort}`;
const pretty = new PrettyError();
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

app.get('/', (req, res) => {
  res.send('Hello from server!');
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


app.use((req, res) => {
  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);
  function hydrateOnClient() {
    res.send(`<!doctype html>${ReactDOM.renderToString(<Default store={store} />)}`);
  }
  match({ history, routes: getRoutes(store), location: req.originalUrl },
  (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      );
      res.status(200);
      global.navigator = { userAgent: req.headers['user-agent'] };
      res.send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Default component={component} store={store} />)}`);
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port, (err) => {
  if (err) { console.error(err); }

  console.info(`Server listening on port ${port}!`);
});
