'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Response = db.define('responses', {
  userResponse: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  timeStamp: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

module.exports = Response;
