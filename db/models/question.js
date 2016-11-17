'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Question = db.define('question', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  correctAnswer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  questionType: {
    type: Sequelize.ENUM('openEnded', 'multipleChoice', 'trueFalse', 'fillInTheBlank'),
    allowNull: false
  }
});

module.exports = Question;
