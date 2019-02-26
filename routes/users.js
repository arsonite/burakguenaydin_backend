const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get('/current', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,

    admin: false
  });

  const { username, email } = req.body;
  let existingUser = await User.findOne({ username, email });
  if (existingUser)
    return res
      .status(400)
      .send(`User (${username}, ${email}) is already registered.`);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();

  res
    .header('x-auth-token', user.JWTAuthToken())
    .header('access-control-expose-headers', 'x-auth-token')
    .status(201)
    .send(user);

  res.status(201).send(user);
});

router.patch('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.delete('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
