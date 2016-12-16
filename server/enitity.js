'use strict'

const express = require('express');
const db = require('APP/db');

const entitiesRouter = express.Router();

// get all entities
entitiesRouter.get('/', (req, res, next) => {
  db.model('entities').findAll()
  .then(entities => {
    res.json(ent);
  })
  .catch(next);
})

// get a specific entity
entitiesRouter.get('/:entityId', (req, res, next) => {
  db.model('entities').findById(req.params.entityId)
  .then(entity => {
    res.json(entity);
  })
  .catch(next);
})

// create an entity
entitiesRouter.post('/', (req, res, next) => {
  db.model('entities').create(req.body)
  .then(entity => {
    res.status(201).json(entity)
  })
  .catch(next);
});

// update a specific entity
entitiesRouter.put('/:entityId', (req, res, next) => {
  db.model('entities').findById(req.params.entityId)
  .then(entity => {
    entity.update(req.body)
    .then(updatedEntity => {
      res.status(201).send(updatedEntity)
    })
  })
  .catch(next);
})

// delete a specific entity
entitiesRouter.delete('/:entityId', (req, res, next) => {
  db.model('entities').findById(req.params.entityId)
  .then(entity => {
    entity.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})
