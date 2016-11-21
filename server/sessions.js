'use strict'

const express = require('express');
const db = require('APP/db');

const sessionsRouter = express.Router();

// get all sessions
sessionsRouter.get('/', (req, res, next) => {
  db.model('sessions').findAll()
  .then(sessions => {
    res.json(sessions)
  })
  .catch(next);
});

// get a specific session by its ID
sessionsRouter.get('/:sessionId', (req, res, next) => {
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    res.json(session);
  })
  .catch(next);
});

// create a session
sessionsRouter.post('/', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body)
  db.model('sessions').create(req.body)
  .then(session => {
    res.status(201).json(session)
  })
  .catch(next);
});

// update a specific session
sessionsRouter.put('/:sessionId', (req, res, next) => {
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    session.update(req.body)
    .then(updatedSession => {
      res.status(201).send(updatedSession)
    })
  })
  .catch(next);
})

// deletes a specific question
sessionsRouter.delete('/:sessionId', (req, res, next) => {
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    session.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = sessionsRouter;
