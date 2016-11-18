'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Question = db.define('question', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  correctAnswer: {
    type: Sequelize.TEXT
  },
  questionType: {
    type: Sequelize.ENUM('openEnded', 'multipleChoice', 'fillInTheBlank'),
    allowNull: false
  },
  choices: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
}, {
  validate: {
    choicesRequired: function() {
      console.log("THIS.CHOICES", this.choices)
      if (this.choices === undefined && this.questionType === 'multipleChoice') {
        throw new Error("If question is not open ended, choices are required!")
      }
    }
  }
});

module.exports = Question;
