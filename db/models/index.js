// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Lecture = require('./lecture');
const Question = require('./question');
const Response = require('./response');
const Session = require('./session');
const StudentQuestion = require('./studentQuestion');
const Entity = require('./entity');

Lecture.belongsTo(User, { as: 'teacher' });
Lecture.belongsToMany(User, { through: 'Participant' });
Question.belongsTo(Lecture);
Lecture.hasMany(Question);
Response.belongsTo(Question);
Question.hasMany(Response);
Session.belongsTo(Lecture);
Lecture.hasMany(Session);
StudentQuestion.belongsTo(Session);
User.belongsTo(Entity);
Entity.hasMany(User);

module.exports = {
  User,
  Lecture,
  Question,
  Response,
  Session,
  StudentQuestion,
  Entity,
};
