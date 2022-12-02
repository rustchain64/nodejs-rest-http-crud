'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const users = require('../api/users');

router.get('/users/:id', (request, response) => {
  const { id } = request.params;
  console.log('id ', id);
  // testing search from user list by username
  // only pass a single value for id ( /users/username )
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
router.post('/users', validations.validateCreateUserUpdateRequest, (request, response) => {
  logger.info('POST  CREATE :: AFTER VALIDATIONS', request.body.firstname);
  const { firstname, lastname, username, agentcode, persona, hash, password } = request.body;
  return users.create({ firstname, lastname, username, agentcode, persona, hash, password }).then(result => {
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
  console.log('PUT IT HERE');
  const { firstname, lastname, username, agentcode, persona, hash, password } = request.body;
  const { id } = request.params;
  users.update({ firstname, lastname, username, agentcode, persona, hash, password, id }).then(result => {
    console.log('ROUTE UPDATE .THEN');
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
  console.log('DELETE A USER');
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
