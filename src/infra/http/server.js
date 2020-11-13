require('dotenv/config');

const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  /* eslint-disable-next-line */
  console.log('Server is running on 3333 port!');
});
