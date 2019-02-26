const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await User.find());
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  await user.save();

  res.status(201).send(user);
});

module.exports = router;
