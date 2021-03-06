'use strict'

const express = require('express');
const db = require('APP/db');

const usersRouter = express.Router();

// get all users
usersRouter.get('/', (req, res, next) => {
  db.model('users').findAll()
  .then(users => {
    res.json(users)
  })
  .catch(next);
});

// get a specific user by their user id,
// return that user,
// catch any errors
usersRouter.get('/:userId', (req, res, next) => {
  db.model('users').findById(req.params.userId)
  .then(user => {
    res.json(user);
  })
  .catch(next);
});

// get all users associated with an entity
usersRouter.get('/entity/:entityId', (req, res, next) => {
  db.model('users').findAll({
    where: {
      entity_id: req.params.entityId
    }
  })
  .then(users => {
    res.json(users)
  })
})

// create a user
usersRouter.post('/', (req, res, next) => {
  db.model('users').create(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(next);
});

// update a specific user
usersRouter.put('/:userId', (req, res, next) => {
  db.model('users').findById(req.params.userId)
  .then(user => {
    user.update(req.body)
    .then(updatedUser => {
      res.status(201).send(updatedUser)
    })
  })
  .catch(next);
})

// deletes a specific user
usersRouter.delete('/:userId', (req, res, next) => {
  db.model('users').findById(req.params.userId)
  .then(user => {
    user.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})


module.exports = usersRouter;
