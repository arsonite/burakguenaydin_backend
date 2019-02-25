const winston = require('winston');
const express = require('express');

const router = express.Router();

const { Language } = require('../models/language');

/* REST-API GET-request for languages */
router.get('/', async (req, res) => {
  winston.info(req);
  res.send(await Language.find());
});

router.post('/', (req, res) => {
  //const { error } = validate(req.body);
  //if (error) return res.status(400).send(error.details[0].message);
  winston.info(req);
  const language = new Language({
    name: req.body.name,
    proficiency: req.body.proficiency,
    projects: req.body.projects
  });
  language.save();

  res.status(201).send(language);
});

/*
router.post('/', [auth, admin], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const route = new Route({
    routepoints: req.body.routepoints
  });
  await route.save();

  res.status(201).send(route);
});

router.put('/:id', [validateObjId, auth, admin], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const route = await Route.findByIdAndUpdate(
    req.params.id,
    {
      routepoints: req.body.routepoints
    },
    { new: true }
  );

  if (!route)
    return res.status(404).send('The route with the given ID was not found.');

  res.status(201).send(route);
});

router.delete('/:id', [validateObjId, auth, admin], async (req, res) => {
  const route = await Route.findByIdAndRemove(req.params.id);

  if (!route)
    return res.status(404).send('The route with the given ID was not found.');

  res.send(route);
});

router.get('/:id', [validateObjId, auth, admin], async (req, res) => {
  const route = await Route.findById(req.params.id);

  if (!route)
    return res.status(404).send('The route with the given ID was not found.');

  res.send(route);
});
*/

module.exports = router;
