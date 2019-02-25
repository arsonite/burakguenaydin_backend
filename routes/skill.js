const winston = require('winston');
const express = require('express');

const router = express.Router();

const Skill = require('../models/skill');

/* REST-API GET-request for languages */
router.get('/', async (req, res) => {
  res.send(await Skill.find());
});

/* REST-API POST-request for languages */
router.post('/', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    proficiency: req.body.name.proficiency,
    projects: req.body.name.projects,
    language: req.body.name.language
  });
  await skill.save();

  res.status(201).send(skill);
});

module.exports = router;
