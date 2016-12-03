'use strict'

const express = require('express');
const db = require('APP/db');

const responseRouter = express.Router();

// get all question responses
responseRouter.get('/', (req, res, next) => {
  db.model('responses').findAll()
  .then(responses => {
    res.json(responses)
  })
  .catch(next);
});

// get a specific question response by its ID
responseRouter.get('/:responseId', (req, res, next) => {
  db.model('responses').findById(req.params.responseId)
  .then(response => {
    res.json(response);
  })
  .catch(next);
});

// create a question response
responseRouter.post('/', (req, res, next) => {
  db.model('responses').create(req.body)
  .then(response => {
    res.status(201).json(response)
  })
  .catch(next);
});

// update a specific student response
responseRouter.put('/:responseId', (req, res, next) => {
  db.model('responses').findById(req.params.responseId)
  .then(lecture => {
    lecture.update(req.body)
    .then(updatedStudentQuestionId => {
      res.status(201).send(updatedStudentQuestionId)
    })
  })
  .catch(next);
})

// deletes a specific student question
responseRouter.delete('/:responseId', (req, res, next) => {
  db.model('responses').findById(req.params.responseId)
  .then(response => {
    response.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = responseRouter;
