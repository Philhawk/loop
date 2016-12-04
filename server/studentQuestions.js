'use strict'

const express = require('express');
const db = require('APP/db');

const studentQuestionRouter = express.Router();

// get all student questions
studentQuestionRouter.get('/', (req, res, next) => {
  db.model('studentQuestions').findAll()
  .then(studentQuestions => {
    res.json(studentQuestions)
  })
  .catch(next);
});

// get a specific student question by its ID
studentQuestionRouter.get('/:studentQuestionId', (req, res, next) => {
  db.model('studentQuestions').findById(req.params.studentQuestionId)
  .then(studentQuestion => {
    res.json(studentQuestion);
  })
  .catch(next);
});


// get all student questions associated with a specific session
studentQuestionRouter.get('/session/:sessionId', (req, res, next) => {
  db.model('studentQuestions').findAll({
    where: {
      session_id: req.params.sessionId
    }
  })
  .then(studentQuestions => {
    res.json(studentQuestions)
  })
  .catch(next);
});

// get all student questions that have been answered
studentQuestionRouter.get('/session/:session_id/answered', (req, res, next) => {
  db.model('studentQuestions').findAll({
    where: {
      session_id: req.params.session_id,
      status: 'answered'
    }
  })
  .then(studentQuestions => {
    res.json(studentQuestions)
  })
  .catch(next);
});


// create a student question
studentQuestionRouter.post('/', (req, res, next) => {
  db.model('studentQuestions').create(req.body)
  .then(studentQuestion => {
    res.status(201).json(studentQuestion)
  })
  .catch(next);
});

// update a specific student question
studentQuestionRouter.put('/:studentQuestionId', (req, res, next) => {
  db.model('studentQuestions').findById(req.params.studentQuestionId)
  .then(lecture => {
    lecture.update(req.body)
    .then(updatedStudentQuestionId => {
      res.status(201).send(updatedStudentQuestionId)
    })
  })
  .catch(next);
})

// deletes a specific student question
studentQuestionRouter.delete('/:studentQuestionId', (req, res, next) => {
  db.model('studentQuestions').findById(req.params.studentQuestionId)
  .then(studentQuestion => {
    studentQuestion.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = studentQuestionRouter;
