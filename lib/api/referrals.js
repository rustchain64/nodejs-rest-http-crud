'use strict';

const db = require('../db');

function find (id) {
  return db.query('SELECT * FROM referrals WHERE id = $1', [id]);
}

function findByAgentCode (code) {
  // console.log('code %s', code);
  const value = `${code}`;
  const newValue = value.split(' ');
  // console.log('newValue[0] %s', newValue[0]);
  // console.log('newValue[0] %s', newValue[1]);
  // const lastValue = newValue[0] + newValue[1];
  // console.log('lastValue %s', lastValue);
  // eslint-disable-next-line no-template-curly-in-string
  // const lastlastValue = '\\' + lastValue + '\\';
  // return db.query('SELECT * FROM referrals WHERE agentcode = \'AGU0W5\'');
  // return db.query(`SELECT * FROM referrals WHERE agentcode = ${code}`);
  return db.query('SELECT * FROM referrals WHERE agentcode = $1', [newValue[0]]);
}

function findAll () {
  return db.query('SELECT * FROM referrals');
}

function create (options = {}) {
  return db.query(
    'INSERT INTO referrals (yourname, referralname, agentname, agentcode, businessname, phone, title, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      options.yourname,
      options.referralname,
      options.agentname,
      options.agentcode,
      options.businessname,
      options.phone,
      options.title,
      options.description
    ]);
}

function update (options = {}) {
  // eslint-disable-next-line camelcase, no-undef
  return db.query('UPDATE referrals SET yourname = $1, referralname = $2, agentname = $3, agentcode = $4, businessname = $5, phone = $6, title = $7, description = $8 WHERE id = $9', [options.yourname, options.referralname, options.agentname, options.agentcode, options.businessname, options.phone, options.title, options.description, options.id]);
}

function remove (id) {
  console.log('DELETE REFERRAL %s', id);
  return db.query('DELETE FROM referrals WHERE id = $1', [id]);
}

module.exports = {
  find,
  findByAgentCode,
  findAll,
  create,
  update,
  remove
};
