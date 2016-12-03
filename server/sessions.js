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

// get all sessions that are currently active
sessionsRouter.get('/active', (req, res, next) => {
  db.model('sessions').findAll({
    include: [{ model: db.model('lectures'), include: [{model: db.model('users'), as: 'teacher'}] }],
    where: {
      active: true
    }
  })
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

// get session by session string
sessionsRouter.get('/string/:sessionString', (req, res, next) => {
  db.model('sessions').findOne({
    where: {
      sessionString: req.params.sessionString
    }
  })
  .then(session => {
    res.json(session);
  })
  .catch(next);
});

// get all sessions associated with an individual lecture
sessionsRouter.get('/lecture/:id', (req, res, next) => {
  db.model('sessions').findAll({
    where: { lecture_id: req.params.id }
  })
  .then(sessions => {
    res.json(sessions);
  })
  .catch(next);
});


// create a session
sessionsRouter.post('/', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body)
  db.model('sessions').create(req.body)
  .then(session => {
    res.status(201).send(session)
    })
  .catch(next);
});

// creates a session that is both active and has a bitly link
sessionsRouter.post('/active', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body)
  db.model('sessions').create(req.body)
  .then(session => {
    bitly.shorten('http://loop-teach.herokuapp.com/studentLoop/' + session.sessionString)
    .then(response => {
      session.update({ bitly: response.data.url })
      .then(updatedSession => {
        res.status(201).send(updatedSession);
      })
    })
  })
  .catch(next);
});

// update a specific session AND add bitly link
sessionsRouter.put('/:sessionId/activate', (req, res, next) => {
  console.log(req.params.sessionId)
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    session.update(req.body)
    .then(updatedSession => {
      bitly.shorten('http://loop-teach.herokuapp.com/studentLoop/' + session.sessionString)
      .then(response => {
        session.update({ bitly: response.data.url })
        .then(updatedSession => {
          res.status(201).send(updatedSession)
        })
      })
    })
  })
  .catch(next);
})

// update a specific session
sessionsRouter.put('/:sessionId', (req, res, next) => {
  console.log(req.params.sessionId)
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    session.update(req.body)
    .then(updatedSession => {
      res.status(201).json(updatedSession)
    })
  })
  .catch(next);
})

// increments currentQuestion property on session of a session by 1
sessionsRouter.put('/:sessionString/next', (req, res, next) => {
  db.model('sessions').findOne({
    where: {
      sessionString: req.params.sessionString
    }
  })
  .then(session => {
    session.update({
      currentQuestion: session.currentQuestion + 1
    })
    .then(updatedSession => {
      res.status(201).send(updatedSession)
    })
  })
  .catch(next);
})

// deletes a specific session
sessionsRouter.delete('/:sessionId', (req, res, next) => {
  db.model('sessions').findById(req.params.sessionId)
  .then(session => {
    session.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = sessionsRouter;
