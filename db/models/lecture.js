'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Lecture = db.define('lectures', {
  name: Sequelize.STRING,
  mood: {
    type: Sequelize.INTEGER,
    validate: {
      max: 100,
      min: 0
    }
  }
})

module.exports = Lecture;
