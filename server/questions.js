'use strict'

const express = require('express');
const db = require('APP/db');

const questionsRouter = express.Router();

// get all questions
questionsRouter.get('/', (req, res, next) => {
  db.model('questions').findAll()
    .then(questions => res.json(questions))
    .catch(next);
});

// get a specific question by its ID
questionsRouter.get('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
    .then(question => res.json(question))
    .catch(next);
});

// get all questions associated with a specific lecture
questionsRouter.get('/lecture/:lectureId', (req, res, next) => {
  db.model('questions').findAll({
    where: {
      lecture_id: req.params.lectureId,
    },
  })
  .then(questions => res.json(questions))
  .catch(next);
});

// get questions by sessionString
questionsRouter.get('/session/:sessionString', (req, res, next) => {
  db.model('sessions').findOne({
    include: [{ model: db.model('lectures') }],
    where: {
      sessionString: req.params.sessionString,
    },
  })
  .then((session) => {
    db.model('questions').findAll({
      where: {
        lecture_id: session.lecture.id,
      },
    })
    .then((questions) => {
      res.json(questions);
    })
  })
  .catch(next);
});

// create a question
questionsRouter.post('/', (req, res, next) => {
  db.model('questions').create(req.body)
    .then(question => res.status(201).json(question))
    .catch(next);
});

// update a specific question
questionsRouter.put('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
    .then(question => question.update(req.body))
    .then(updatedQuestion => res.status(201).send(updatedQuestion))
    .catch(next);
});

// deletes a specific question
questionsRouter.delete('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
    .then((question) => {
      question.destroy()
      .then(() => res.sendStatus(204))
    })
    .catch(next);
});

module.exports = questionsRouter;
