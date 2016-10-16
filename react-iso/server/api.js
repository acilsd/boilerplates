/* eslint no-console: 0 */
import express from 'express';
import { apiPort } from '../config/config-env';
const app = express();

app.get('/api', (req, res) => {
  res.send('TEST: SUCCEED');
});

app.listen(apiPort, (err) => {
  if (err) { console.error(err); }
  console.info(`Api listening on port ${apiPort}!`);  
});
