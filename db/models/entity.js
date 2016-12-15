'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Entity = db.define('entity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Entity;
