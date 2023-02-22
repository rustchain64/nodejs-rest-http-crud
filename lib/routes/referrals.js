'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const referrals = require('../api/referrals');

// router.get('/referrals/:id', (request, response) => {
//   const { id } = request.params;

//   referrals.find(id).then(result => {
//     if (result.rowCount === 0) {
//       response.status(404);
//       return response.send(`Item ${id} not found`);
//     }

//     return response.send(result.rows[0]);
//   }).catch(() => {
//     response.sendStatus(400);
//   });
// });

router.get('/referrals/:id', (request, response) => {
  const { id } = request.params;
  // console.log('referrals %s', id);
  referrals.findByAgentCode(id).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Item ${id} not found`);
    }
    console.log('##### result.rows[0] %s', result.rows.length);
    return response.send(result.rows);
  }).catch(() => {
    console.log('BAD REQUEST STATUS 400');
    response.sendStatus(400);
  });
});

router.get('/referrals', (request, response) => {
  logger.info('/referrals routes');
  referrals.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});

router.post('/referrals', validations.validateCreateReferralUpdateRequest, (request, response) => {
  const {
    yourname,
    referralname,
    agentname,
    agentcode,
    businessname,
    phone,
    title,
    description
  } = request.body;
  return referrals.create(
    {
      yourname,
      referralname,
      agentname,
      agentcode,
      businessname,
      phone,
      title,
      description
    }).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

router.put('/referrals/:id', validations.validateCreateReferralUpdateRequest, (request, response) => {
  const { yourname, referralname, agentname, agentcode, businessname, phone, title, description } = request.body;
  const { id } = request.params;
  referrals.update({ yourname, referralname, agentname, agentcode, businessname, phone, title, description, id }).then(result => {
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
