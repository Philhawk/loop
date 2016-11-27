'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const StudentQuestion = db.define('studentQuestions', {
  content: {
    type: Sequelize.TEXT,
    notNull: false
  },
  status: {
    type: Sequelize.ENUM('answered', 'unanswered'),
    defaultValue: 'unanswered'
  }
})

module.exports = StudentQuestion;
