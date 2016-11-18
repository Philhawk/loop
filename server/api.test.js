const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe('/api/users', () => {
  describe('when not logged in', () => {
    xit('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
        .get(`/api/users/1`)
        .expect(401)
    )

    xit('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'beth@secrets.org',
          password: '12345'
        })
        .expect(201)
    )

    xit('POST redirects to the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'eve@interloper.com',
          password: '23456',
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    )
  })
})

/* Dummy data for tests */

// one teacher  {id: 5, name: 'Max Exampleton', email: 'max@max.max', password: '1234', role: 'Teacher'},
const userOne = {id: 2, name: 'Max Exampleton', email: 'max@max.max', password: '1234', role: 'Teacher'}

// one lecture
const lectureOne = {id: 1, name: 'English II Othello', mood: 75, timeStarted: Date.UTC(2016, 11, 5, 8, 25), teacher_id: 1}
const lectureTwo = {id: 2, name: 'English II Othello', mood: 75, timeStarted: Date.UTC(2016, 11, 5, 8, 25), teacher_id: 1}

// three questions
const questionOne = {id: 1, content: 'Who is the antagonist of Othello?', correctAnswer: 'Iago', questionType: 'multipleChoice', choices: ['Iago', 'Othello', 'Cassio', 'Desdemona'], lecture_id: 1}
const questionTwo = {id: 2, content: 'What are two ways Othello experienced racism in Act I?', questionType: 'openEnded', lecture_id: 1}
const questionThree = {id: 3, content: 'What is the method for using middleware?', correctAnswer: 'use', questionType: 'fillInTheBlank', lecture_id: 2}
const questionFour = {id: 4, content: 'What is the method for using middleware?', correctAnswer: 'use', questionType: 'fillInTheBlank', lecture_id: 2}

// tests begin below
describe('/api/questions', () => {
  before('creates three questions', () =>
    db.didSync
      .then(() =>
        db.model('lectures').bulkCreate([lectureOne, lectureTwo])
      )
      .then(() =>
        db.model('questions').bulkCreate([questionOne, questionTwo, questionThree])
      )
  )

  describe('question routes', () => {

    it('gets all questions', () =>
      request(app).get('/api/questions')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(3)
      })
    )

    it('gets a single question by id', () => {
      return request(app).get('/api/questions/1')
      .expect(200)
      .then(res => {
        expect(res.body.correctAnswer).to.equal(questionOne.correctAnswer)
      })
    })

    it('gets questions by lecture ID', () => {
      return request(app).get('/api/questions/lectures/1')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(2)
      })
    })

    it('creates a new question', () => {
      return request(app).post('/api/questions/')
      .send(questionFour)
      .expect(201)
      .then(res => {
        expect(res.body.id).to.equal(questionFour.id)
      })
    })

    it('updates an existing question', () => {
      return request(app).put('/api/questions/1')
      .send({ content: 'this is updated question content'})
      .expect(201)
      .then(res => {
        expect(res.body.content).to.equal('this is updated question content')
      })
    })

    it('deletes a question', () => {
      return request(app).delete('/api/questions/4')
      .expect(204)
    })

  })
})
