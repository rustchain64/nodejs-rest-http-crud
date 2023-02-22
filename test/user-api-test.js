/* eslint-disable no-undef */
'use strict';

const assert = require('assert');
const proxyquire = require('proxyquire');

const mockDb = {
  query: () => {
    return Promise.resolve();
  }
};

const users = proxyquire('../lib/api/users', {
  '../db': mockDb
});

describe('Fruits methods', () => {
  it('API', () => {
    assert.strictEqual(typeof users.find, 'function');
    assert.strictEqual(typeof users.findAll, 'function');
    assert.strictEqual(typeof users.create, 'function');
    assert.strictEqual(typeof users.update, 'function');
    assert.strictEqual(typeof users.remove, 'function');
  });

  it('find all', () => {
    const result = users.findAll();
    assert.strictEqual(result instanceof Promise, true);
  });

  it('find', () => {
    const result = users.find('id');
    assert.strictEqual(result instanceof Promise, true);
  });

  it('create', () => {
    const result = users.create('name', 'stock');
    assert.strictEqual(result instanceof Promise, true);
  });

  it('update', () => {
    const result = users.update({ name: 'name', stock: 'stock', id: 1 });
    assert.strictEqual(result instanceof Promise, true);
  });

  it('remove', () => {
    const result = users.remove('id');
    assert.strictEqual(result instanceof Promise, true);
  });
});
