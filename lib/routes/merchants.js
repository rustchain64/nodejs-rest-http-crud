'use strict';

const logger = require('../../logger.js');

const express = require('express');
/* eslint new-cap: "warn" */
const router = express.Router();

const validations = require('../validations');
const merchants = require('../api/merchants');

router.get('/merchants/:id', (request, response) => {
  const { id } = request.params;

  merchants.find(id).then(result => {
    if (result.rowCount === 0) {
      response.status(404);
      return response.send(`Item ${id} not found`);
    }

    return response.send(result.rows[0]);
  }).catch(() => {
    response.sendStatus(400);
  });
});

router.get('/merchants', (request, response) => {
  logger.info('/merchants routes');
  merchants.findAll().then(results => {
    response.send(results.rows);
  }).catch(error => {
    logger.error(error);
    response.sendStatus(400);
  });
});

router.post('/merchants', validations.validateCreateMerchantUpdateRequest, (request, response) => {
  console.log('CREATE MERCHANT POST:');
  const {
    yourname,
    referralname,
    agentname,
    agentcode,
    businessname,
    phone,
    email,
    ss,
    bankname,
    routingnumber,
    accountnumber,
    title,
    description,
    published
  } = request.body;
  return merchants.create(
    {
      yourname,
      referralname,
      agentname,
      agentcode,
      businessname,
      phone,
      email,
      ss,
      bankname,
      routingnumber,
      accountnumber,
      title,
      description,
      published
    }).then(result => {
    response.status(201);
    return response.send(result.rows[0]);
  }).catch(error => {
    response.status(400);
    response.send(error);
  });
});

router.put('/merchants/:id', validations.validateCreateMerchantUpdateRequest, (request, response) => {
  const { yourname, referralname, agentname, agentcode, businessname, phone, email, ss, bankname, routingnumber, accountnumber, title, description, published } = request.body;
  const { id } = request.params;
  merchants.update({ yourname, referralname, agentname, agentcode, businessname, phone, email, ss, bankname, routingnumber, accountnumber, title, description, published, id }).then(result => {
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

// router.put('/merchants/:id', validations.validateCreateMerchantUpdateRequest, (request, response) => {
//   const {
//     yourname,
//     referralname,
//     agentname,
//     agentcode,
//     businessname
//     // phone,

//     // email,
//     // ss,
//     // bankname,

//     // routingnumber,
//     // accountnumber,
//     // title,
//     // description,
//     // published
//   } = request.body;
//   logger.info('DID GET AGENT CODE:: ');
//   const { id } = request.params;
//   merchants.update(
//     {
//       yourname,
//       referralname,
//       agentname,
//       agentcode,
//       businessname,
//       // phone,

//       // email,
//       // ss,
//       // bankname,
//       // routingnumber,
//       // accountnumber,
//       // title,
//       // description,
//       // published,
//       id
//     }).then(result => {
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

router.delete('/merchants/:id', (request, response) => {
  const { id } = request.params;
  merchants.remove(id).then(result => {
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
