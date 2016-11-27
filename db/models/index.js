'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Lecture = require('./lecture');
const Question = require('./question');
const Response = require('./response');
const Session = require('./session');
const StudentQuestion = require('./studentQuestion');

Lecture.belongsTo(User, { as: 'teacher' });
Lecture.belongsToMany(User, { through: 'Participant' })
Question.belongsTo(Lecture);
Response.belongsTo(Question);
Session.belongsTo(Lecture);
StudentQuestion.belongsTo(Session);

module.exports = {User, Lecture, Question, Response, Session, StudentQuestion}
