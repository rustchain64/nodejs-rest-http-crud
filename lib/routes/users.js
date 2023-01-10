'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const users = require('../api/users');

router.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const values = id.split(',');
  const username = values[0];
  const password = values[1];
  // testing search from user list by username
  // only pass a single value for id ( /users/username )
  users.find({ username, password }).then(result => {
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
  users.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});
// create
router.post('/users', validations.validateCreateUserUpdateCreateRequest, (request, response) => {
  logger.info('POST  CREATE :: AFTER VALIDATIONS', request.body.firstname);
  const { firstname, lastname, username, agentcode, persona, password } = request.body;
  return users.create({ firstname, lastname, username, agentcode, persona, password }).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});
// update
router.put('/users/:id', validations.validateCreateUserUpdateRequest, (request, response) => {
  logger.info('PUT  CREATE :: AFTER VALIDATIONS', request);
  const { firstname, lastname, username, agentcode, persona, password } = request.body;
  const { id } = request.params;
  users.update({ firstname, lastname, username, agentcode, persona, password, id }).then(result => {
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
  console.log('API DELETE USER: %s', request.params.id);
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
