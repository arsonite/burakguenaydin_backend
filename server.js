/* Boilerplate requirements */
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

const app = express();

/* Connecting mongoose to database */
const db = 'mongodb://0.0.0.0:27017/data';
mongoose.connect(db).then(() => {
  console.log(`Connected mongoose with database on ${db}.`);
});

/* Looking if environmental variable was set */
if (!config.get('jwtPrivateKey')) {
  throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

/* Routes requirements */
const skills = require('./routes/skills');
const users = require('./routes/users');
const authentification = require('./routes/authentification');

/* Bodyparser-boilerplate */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Middlewares */
app.use(cors());

/* Routes */
app.use('/backend/skills', skills);
app.use('/backend/users', users);
app.use('/backend', authentification);

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
  console.log(`Server is now listening on port: ${port}.`);
});
