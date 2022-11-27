'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const referrals = require('../api/referrals');

router.get('/referrals/:id', (request, response) => {
  const { id } = request.params;

  referrals.find(id).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Item ${id} not found`);
    }

    return response.send(result.rows[0]);
  }).catch(() => {
    response.sendStatus(400);
  });
});

router.get('/referrals', (request, response) => {
  referrals.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});

router.post('/referrals', validations.validateCreateUpdateRequest, (request, response) => {
  const { name, stock } = request.body;
  return referrals.create(name, stock).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

router.put('/referrals/:id', validations.validateCreateUpdateRequest, (request, response) => {
  const { name, stock } = request.body;
  const { id } = request.params;
  referrals.update({ name, stock, id }).then(result => {
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

router.delete('/referrals/:id', (request, response) => {
  const { id } = request.params;
  referrals.remove(id).then(result => {
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
