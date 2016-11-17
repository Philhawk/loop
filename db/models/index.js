'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Lecture = require('./lecture');
const Question = require('./question');
const Response = require('./response');

Lecture.belongsTo(User, { as: 'teacher' });
Lecture.belongsToMany(User, { through: 'Participant' })
Question.belongsTo(Lecture);
Response.belongsTo(Question);

module.exports = {User, Lecture, Question, Response}
