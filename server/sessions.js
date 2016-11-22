'use strict'

const express = require('express');
const db = require('APP/db');
const Bitly = require('bitly')

let bitly = new Bitly('87b278673e682bea6b3c2694b6d51b493ec2c0a1');


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

    bitly.shorten('http://loop-teach.herokuapp.com/' + session.sessionString)
    .then(response => {
      console.log("RESPONSE URL", response.data.url)
      session.dataValues.bitly = response.data.url
      console.log("SESSION", session)
      res.status(201).send(session)
    })

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
