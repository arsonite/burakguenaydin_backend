const bcrypt = require('bcrypt');
const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/login', async (req, res) => {
  console.log(req.body);

  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Wrong username.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Password did not match.');

  res.send(user.JWTAuthToken());
});

module.exports = router;
