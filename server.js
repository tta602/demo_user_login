'use strict';
require('dotenv').config();

global.__basedir = __dirname;

const {
  app: { port },
} = require('./src/config/config.app');

const env = process.env.NODE_ENV || 'uat';
process.title = `demoapp-${env}-server`;

const http = require('http');
const app = require('./src/app');

/** init database */
// require('./src/dbs/init_mongodb');

require('./src/dbs/init_mariadb')

/** init redis */
// const pubClient = require('./src/dbs/init_redis');

const server = http.createServer(app);

// (async () => {
//   await pubClient.connect();
// })();

/** init firebase */
// require('./src/firebase/init.firebase_admin');

const PORT = port;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
