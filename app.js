'use strict';

/*
 *
 *  Copyright 2016-2017 Red Hat, Inc, and individual contributors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const logger = require('./logger.js');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// const corsOptions = {
// origin: "https://your-website.com"
// };

const allowedDomains = ['http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:8081',
  'https://qod-web-ac-pie.pie-io-dal12-b3c-4x16-5d593c3630023cf58036e0ce4ac1c569-0000.us-south.containers.appdomain.cloud'];

app.use(cors({
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);

    if (allowedDomains.indexOf(origin) === -1) {
      const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// app.use(cors(corsOptions));

const db = require('./lib/db');

const fruits = require('./lib/routes/fruits');
const users = require('./lib/routes/users');
const referrals = require('./lib/routes/referrals');

app.use(bodyParser.json());
app.use((error, request, response, next) => {
  if (request.body === '' || (error instanceof SyntaxError && error.type === 'entity.parse.failed')) {
    response.status(415);
    return response.send('Invalid payload!');
  }

  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', fruits);
app.use('/api', users);
app.use('/api', referrals);

// Add a health check
app.use('/ready', (request, response) => {
  return response.sendStatus(200);
});

app.use('/live', (request, response) => {
  return response.sendStatus(200);
});

db.init().then(() => {
  logger.info('Database init\'d');
}).catch(error => {
  logger.error(error);
});

module.exports = app;
