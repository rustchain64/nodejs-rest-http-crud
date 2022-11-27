'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const users = require('../api/users');

router.get('/users/:id', (request, response) => {
  const { firstname, lastname, username, agentcode, persona, hash, password } = request.body;
  const { id } = request.params;
  console.log('firstname ', firstname);
  console.log('lastname ', lastname);
  console.log('username ', username);
  console.log('agentcode ', agentcode);
  console.log('persona ', persona);
  console.log('hash ', hash);
  console.log('password ', password);
  console.log('id ', id);
  // only pass a single value ( username )
  users.find({ id }).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Item ${id} not found`);
    }

    return response.send(result.rows[0]);
  }).catch(() => {
    response.sendStatus(400);
  });
});

router.get('/users', (request, response) => {
  console.log('/USERS GET:: ', request);
  users.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});
// create
router.post('/users', validations.validateCreateUpdateRequest, (request, response) => {
  const { firstname, lastname, username, agentcode, persona, hash, password } = request.body;
  return users.create(firstname, lastname, username, agentcode, persona, hash, password).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});
// update
router.put('/users/:id', validations.validateCreateUpdateRequest, (request, response) => {
  const { firstname, lastname, username, agentcode, persona, hash, password } = request.body;
  const { id } = request.params;
  users.update({ firstname, lastname, username, agentcode, persona, hash, password, id }).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Unknown item ${id}`);
    }

    return response.sendStatus(204);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

router.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  users.remove(id).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Unknown item ${id}`);
    }

    return response.sendStatus(204);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

module.exports = router;
