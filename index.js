const winston = require('winston');
const express = require('express');
//const config = require('config');

const app = express();

//require('express-async-errors'); // monkey patch async handler functions -> try/catch

/*
require('./startup/logging')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
*/

//const port = process.env.PORT || 3000;
const port = 3000;
const server = app.listen(port, () =>
  winston.info(`Your backend is now listening to port: ${port}`)
);

module.exports = server;
