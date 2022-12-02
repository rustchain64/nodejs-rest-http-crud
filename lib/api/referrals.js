'use strict';

const db = require('../db');

function find (id) {
  return db.query('SELECT * FROM referrals WHERE id = $1', [id]);
}

function findAll () {
  console.log('REFERRAL findAll Referrals: ');
  return db.query('SELECT * FROM referrals');
}

function create (options = {}) {
  return db.query(
    'INSERT INTO referrals ( yourname, referralname, agentname, agentcode, businessname, phone, email, ss, bankname, routingnumber, accountnumber, title, description, published  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
    [
      options.yourname,
      options.referralname,
      options.agentname,
      options.agentcode,
      options.businessname,
      options.phone,
      options.email,
      options.ss,
      options.bankname,
      options.routingnumber,
      options.accountnumber,
      options.title,
      options.description,
      options.published
    ]);
}

function update (options = {}) {
  return db.query('UPDATE referrals SET yourname = $1, referralname = $2, agentname = $3, agentcode = $4, businessname = $5, phone = $6, email = $7, ss = $8, bankname = $9, routingnumber = $10, accountnumber = $11,  title = $12, description = $13, published = $14 WHERE id = $15', [options.yourname, options.referralname, options.agentname, options.agentcode, options.businessname, options.phone, options.email, options.ss, options.bankname, options.routingnumber, options.accountnumber, options.title, options.description, options.published, options.id]);
}

function remove (id) {
  return db.query('DELETE FROM referrals WHERE id = $1', [id]);
}

module.exports = {
  find,
  findAll,
  create,
  update,
  remove
};
