const winston = require('winston');
const express = require('express');
//require('express-async-errors'); // monkey patch async handler functions -> try/catch
//const config = require('config');
const app = express();

/*
require('./startup/logging')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
*/

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
