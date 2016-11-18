'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Session = db.define('sessions', {
  sessionString: {
    type: Sequelize.STRING,
    notNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Session;
