/* Boilerplate requirements */
const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');

require('winston-mongodb');

const app = express();

/* Routes requirements */
const languages = require('./routes/languages');

/* Bodyparser-boilerplate */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Middlewares */

/* Connecting mongoose to database */
winston.handleExceptions(
  new winston.transports.Console({ colorize: true, prettyPrint: true }),
  new winston.transports.File({ filename: 'uncaughtExceptions.log' })
);

// unhandled promise rejections
process.on('unhandledRejection', ex => {
  throw ex;
});

winston.add(winston.transports.File, { filename: 'logfile.log' });
winston.add(winston.transports.MongoDB, {
  db: config.get('log'),
  collection: 'logs',
  level: 'info'
});
winston.info(`Logging to ${config.get('log')}...`);

if (!config.get('jwtPrivateKey')) {
  // momentan wird der Private Key direkt aus default/development.json gelesen (in Klartext)
  // später soll eine Umgebungsvariable auf dem Server gesetzt werden und mit
  // custom-environment-variables.json auf die Umgebungsvariable gemappt werden
  throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

const db = config.get('data');
mongoose
  .connect(db, {
    useNewUrlParser: true,
    server: {
      // sets how many times to try reconnecting
      reconnectTries: Number.MAX_VALUE,
      // sets the delay between every retry (milliseconds)
      reconnectInterval: 1000
    }
  })
  .then(() => winston.info(`Connected to ${db}`));

/* Routes */
app.use('/backend/languages', languages);

/* catch all 400 */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

/* catch all 500 */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

/* Starting up server on port 3000 */
const port = process.env.PORT || '3000';
app.listen(port, () => {
  winston.info(`Server running on port: ${port}`);
});
