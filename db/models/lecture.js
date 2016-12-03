'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Lecture = db.define('lectures', {
  name: Sequelize.STRING,
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Lecture;
