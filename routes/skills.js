const express = require('express');

const router = express.Router();

const Skill = require('../models/skill');

router.get('/', async (req, res) => {
  const skills = await Skill.find();
  /* Descending sort */
  res.send(skills.sort((a, b) => (a.proficiency < b.proficiency ? 1 : -1)));
});

router.post('/', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    proficiency: req.body.proficiency,
    proficiencies: req.body.proficiencies,
    projects: req.body.projects,
    language: req.body.language
  });
  await skill.save();

  res.status(201).send(skill);
});

module.exports = router;
