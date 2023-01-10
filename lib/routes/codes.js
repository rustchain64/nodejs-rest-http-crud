'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const codes = require('../api/codes');

// router.get('/codes/:id', (request, response) => {
//   const { id } = request.params;

//   codes.find(id).then(result => {
//     if (result.rowCount === 0) {
//       response.status(404);
//       return response.send(`Item ${id} not found`);
//     }

//     return response.send(result.rows[0]);
//   }).catch(() => {
//     response.sendStatus(400);
//   });
// });

router.get('/codes', (request, response) => {
  codes.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});

router.post('/codes', validations.validateCreateUpdateCodesRequest, (request, response) => {
  const { agentCode } = request.body;
  return codes.create({ agentCode }).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

// router.put('/codes/:id', validations.validateCreateUpdateCodesRequest, (request, response) => {
//   const { agentCode } = request.body;
//   const { id } = request.params;
//   codes.update({ agentCode, id }).then(result => {
//     if (result.rowCount === 0) {
//       response.status(404);
//       return response.send(`Unknown item ${id}`);
//     }

//     return response.sendStatus(204);
//   }).catch(error => {
//     response.status(400);
//     response.send(error);
//   });
// });

router.delete('/codes/:id', (request, response) => {
  const { id } = request.params;
  codes.remove(id).then(result => {
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
