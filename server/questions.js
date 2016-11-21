'use strict'

const express = require('express');
const db = require('APP/db');

const questionsRouter = express.Router();

// get all questions
questionsRouter.get('/', (req, res, next) => {
  db.model('questions').findAll()
  .then(questions => {
    res.json(questions)
  })
  .catch(next);
});

// get a specific question by its ID
questionsRouter.get('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
  .then(question => {
    res.json(question);
  })
  .catch(next);
});

// get all questions associated with a specific lecture
questionsRouter.get('/lectures/:lectureId', (req, res, next) => {
  db.model('questions').findAll({
    where: {
      lecture_id: req.params.lectureId
    }
  })
  .then(questions => {
    res.json(questions)
  })
  .catch(next);
});

// create a question
questionsRouter.post('/', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body)
  db.model('questions').create(req.body)
  .then(question => {
    res.status(201).json(question)
  })
  .catch(next);
});

// update a specific question
questionsRouter.put('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
  .then(question => {
    question.update(req.body)
    .then(updatedQuestion => {
      res.status(201).send(updatedQuestion)
    })
  })
  .catch(next);
})

// deletes a specific question
questionsRouter.delete('/:questionId', (req, res, next) => {
  db.model('questions').findById(req.params.questionId)
  .then(question => {
    question.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = questionsRouter;
