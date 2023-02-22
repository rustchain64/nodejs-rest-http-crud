'use strict';

const db = require('../db');

function find (id) {
  return db.query('SELECT * FROM codes WHERE id = $1', [id]);
}

function findAll () {
  return db.query('SELECT * FROM codes');
}

function create (options = {}) {
  // return db.query('INSERT INTO codes (agentCode) VALUES ($1) RETURNING *', [agentCode]);
  return db.query('INSERT INTO codes (agentcode) VALUES ($1) RETURNING *', [options.agentCode]);
}

// function update (options = {}) {
//   return db.query('UPDATE codes SET code = $1 WHERE id = $2', [options.code, options.id]);
// }

function remove (id) {
  return db.query('DELETE FROM codes WHERE id = $1', [id]);
}

module.exports = {
  find,
  findAll,
  create,
  // update,
  remove
};
