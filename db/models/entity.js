'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

// entities have their own models and are associated with users
// if a user is an entityAdmin, they have administrative rights for that entity

const Entity = db.define('entities', {
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
