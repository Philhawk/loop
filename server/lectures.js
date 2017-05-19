'use strict'

const express = require('express');
const db = require('APP/db');

const lecturesRouter = express.Router();

// get all lectures
lecturesRouter.get('/', (req, res, next) => {
  db.model('lectures').findAll()
  .then(lectures => {
    res.json(lectures)
  })
  .catch(next);
});

// get a specific lecture by its ID
lecturesRouter.get('/:lectureId', (req, res, next) => {
  db.model('lectures').findOne({
    include: [
      {
        model: db.model('questions'),
        include: [{ model: db.model('responses') }]
      },
      db.model('sessions'),
    ],
    where: {
      id: req.params.lectureId
    }

  })
  .then(lecture => {
    res.json(lecture);
  })
  .catch(next);
});

// get all lectures by a teacher's ID include sessions
lecturesRouter.get('/teacher/:teacherId', (req, res, next) => {
  db.model('lectures').findAll({
    include: [ { model: db.model('sessions') } ],
    where: { teacher_id: req.params.teacherId }
  })
  .then(lectureList => {
    res.json(lectureList);
  })
  .catch(next);
});

// create a lecture
lecturesRouter.post('/', (req, res, next) => {
  db.model('lectures').create(req.body)
  .then(lecture => {
    res.status(201).json(lecture)
  })
  .catch(next);
});

// update a specific lecture
lecturesRouter.put('/:lectureId', (req, res, next) => {
  db.model('lectures').findById(req.params.lectureId)
  .then(lecture => {
    lecture.update(req.body)
    .then(updatedLecture => {
      res.status(201).send(updatedLecture)
    })
  })
  .catch(next);
})

// deletes a specific question
lecturesRouter.delete('/:lectureId', (req, res, next) => {
  db.model('lectures').findById(req.params.lectureId)
  .then(lecture => {
    lecture.destroy()
    .then(() => res.sendStatus(204))
  })
  .catch(next);
})

module.exports = lecturesRouter;
