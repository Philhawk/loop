const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('../start')

/* Dummy data for tests */

// one teacher
const userOne = {name: 'Max Exampleton', email: 'max@max.max', role: 'Teacher'}
const userTwo = {name: 'Max Max', email: 'example@yay.com', role: 'Teacher'}

// one lecture
const lectureOne = {id: 1, name: 'Example 1', description: 'an example lecture', teacher_id: 3}
const lectureTwo = {id: 2, name: 'Example 2', description: 'an example lecture', teacher_id: 3}
const lectureThree = {id: 3, name: 'Example 3', description: 'an example lecture', teacher_id: 4}


// three questions
const questionOne = {id: 1, content: 'Who is the antagonist of Othello?', correctAnswer: 'Iago', choices: ['a', 'b', 'c', 'd'], questionType: 'multipleChoice', choices: ['Iago', 'Othello', 'Cassio', 'Desdemona'], lecture_id: 1}
const questionTwo = {id: 2, content: 'What are two ways Othello experienced racism in Act I?', questionType: 'openEnded', lecture_id: 1}
const questionThree = {id: 3, content: 'What is the method for using middleware?', correctAnswer: 'use', choices: ['a', 'b', 'c', 'd'], questionType: 'multipleChoice', lecture_id: 2}
const questionFour = {id: 4, content: 'What is the method for using middleware?', correctAnswer: 'use', choices: ['a', 'b', 'c', 'd'], questionType: 'multipleChoice', lecture_id: 2}

// five sessions
const sessionOne = {sessionString: '12d9dc83-01d6-4085-9cb3-aed81af7b29c', sessionLength: '45:00', mood: [50, 45, 30], active: false, lecture_id: 1, currentQuestion: 0}
const sessionTwo = {sessionString: 'bd6f8c3b-1443-4eee-aa37-c912b9a2bd60', sessionLength: '20:30', mood: [50, 60, 70], active: false, lecture_id: 1, currentQuestion: 0}
const sessionThree = {sessionString: 'e0b9888a-b9ab-11e6-a4a6-cec0c932ce01', sessionLength: '20:30', mood: [50, 60, 70], active: true, lecture_id: 1, currentQuestion: 0}
const sessionFour = {sessionString: 'e0b99050-b9ab-11e6-a4a6-cec0c932ce01', sessionLength: '20:30', mood: [50, 60, 70], active: false, lecture_id: 1, currentQuestion: 0}
const sessionFive = {sessionString: 'e0b99050-b9ab-11e6-a4a6-cec0c932ce01', sessionLength: '20:30', mood: [50, 60, 70], active: false, lecture_id: 1, currentQuestion: 0}

// four responses
const responseOne = {userResponse: '1', timeStamp: Date.now(), question_id: 1}
const responseTwo = {userResponse: '3', timeStamp: Date.now(), question_id: 1}
const responseThree = {userResponse: 'I do not know the answer', timeStamp: Date.now(), question_id: 2}
const responseFour = {userResponse: 'I do know the answer', timeStamp: Date.now(), question_id: 2}

// four student questions
const studentQuestionOne = {content: 'I need help', status: 'answered', session_id: 1}
const studentQuestionTwo = {content: 'This is a question from a student', status: 'unanswered', session_id: 1}
const studentQuestionThree = {content: 'Still confused', status: 'answered', session_id: 2}
const studentQuestionFour = {content: 'Is that prime?', status: 'unanswered', session_id: 2}


// tests begin below
describe('/api/questions', () => {
  before('creates dummy data', () =>
    db.didSync
      .then(() =>
        db.model('users').bulkCreate([userOne, userTwo])
      )
      .then(() =>
        db.model('lectures').bulkCreate([lectureOne, lectureTwo])
      )
      .then(() =>
        db.model('questions').bulkCreate([questionOne, questionTwo, questionThree])
      )
      .then(() =>
        db.model('sessions').bulkCreate([sessionOne, sessionTwo, sessionThree])
      )
      .then(() =>
        db.model('responses').bulkCreate([responseOne, responseTwo, responseThree])
      )
      .then(() =>
        db.model('studentQuestions').bulkCreate([studentQuestionOne, studentQuestionTwo, studentQuestionThree])
      )
  )

  describe('/api/users', () => {
    describe('when not logged in', () => {
      it('POST creates a user', () =>
        request(app)
          .post('/api/users')
          .send({
            email: 'beth@secrets.org',
            password: '12345'
          })
          .expect(201)
      )

      it('POST redirects to the user it just made', () =>
        request(app)
          .post('/api/users')
          .send({
            email: 'eve@interloper.com',
            password: '23456',
          })
          .redirects(1)
          .then(res => expect(res.body).to.contain({
            email: 'eve@interloper.com'
          })
        )
      )

      it('PUT updates a specific user', () =>
        request(app)
          .put('/api/users/1')
          .send({ name: 'updated name' })
          .expect(201)
          .then(res => expect(res.body.name).to.equal('updated name'))
      )

      it('DELETE deletes a specific user', () =>
        request(app)
          .delete('/api/users/1')
          .expect(204)
      )

    })
  })


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
      return request(app).get('/api/questions/lecture/1')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(2)
      })
    })

    it('gets questions by a session string', () => {
      return request(app).get('/api/questions/session/12d9dc83-01d6-4085-9cb3-aed81af7b29c')
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

  describe('lecture routes', () => {

    it('gets all lectures', () =>
      request(app).get('/api/lectures')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(2)
      })
    )

    it('gets a single lecture by id', () => {
      return request(app).get('/api/lectures/1')
      .expect(200)
      .then(res => {
        expect(res.body.name).to.equal(lectureOne.name)
      })
    })

    it('gets all lectures by teacher ID', () => {
      return request(app).get('/api/lectures/teacher/3')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(2)
      })
    })

    it('creates a new lecture', () => {
      return request(app).post('/api/lectures/')
      .send(lectureThree)
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal(lectureThree.name)
      })
    })

    it('updates a specific lecture', () => {
      return request(app).put('/api/lectures/1')
      .send({ name: 'updated name'})
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal('updated name')
      })
    })

    it('deletes a lecture', () => {
      return request(app).delete('/api/lectures/3')
      .expect(204)
    })
  })

  describe('response routes', () => {

    it('gets all responses', () =>
      request(app).get('/api/responses')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(3)
      })
    )

    it('gets a single response by id', () => {
      return request(app).get('/api/responses/1')
      .expect(200)
      .then(res => {
        expect(res.body.userResponse).to.equal(responseOne.userResponse)
      })
    })

    it('creates a new response', () => {
      return request(app).post('/api/responses/')
      .send(responseFour)
      .expect(201)
      .then(res => {
        expect(res.body.userResponse).to.equal(responseFour.userResponse)
      })
    })

    it('updates a specific response', () => {
      return request(app).put('/api/responses/1')
      .send({ userResponse: 'updated response'})
      .expect(201)
      .then(res => {
        expect(res.body.userResponse).to.equal('updated response')
      })
    })

    it('deletes a response', () => {
      return request(app).delete('/api/responses/4')
      .expect(204)
    })
  })

  describe('sessions routes', () => {

    it('gets all sessions', () =>
      request(app).get('/api/sessions')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(3)
      })
    )

    it('gets all active sessions', () =>
      request(app).get('/api/sessions/active')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(1)
      })
    )


    it('gets all single session by id', () => {
      return request(app).get('/api/sessions/1')
      .expect(200)
      .then(res => {
        expect(res.body.sessionString).to.equal(sessionOne.sessionString)
      })
    })

    it('gets a single session by its session string', () => {
      return request(app).get('/api/sessions/string/e0b9888a-b9ab-11e6-a4a6-cec0c932ce01')
      .expect(200)
      .then(res => {
        expect(res.body.sessionString).to.equal(sessionThree.sessionString)
      })
    })


    it('creates a new session', () => {
      return request(app).post('/api/sessions/')
      .send(sessionFour)
      .expect(201)
      .then(res => {
        expect(res.body.sessionString).to.equal(sessionFour.sessionString)
      })
    })

    it('creates a new session that has a bitly link', () => {
      return request(app).post('/api/sessions/active')
      .send(sessionFive)
      .expect(201)
      .then(res => {
        expect(res.body.bitly).to.exist
      })
    })

    it('updates an existing session to have a bitly link', () => {
      return request(app).put('/api/sessions/1/activate')
      .expect(201)
      .then(res => {
        expect(res.body.bitly).to.exist
      })
    })

    it('adds a mood value to the session mood array', () => {
      return request(app).put('/api/sessions/1/mood')
      .send({ mood: 70})
      .expect(201)
      .then(res => {
        expect(res.body.mood).to.have.length.of(4)
      })
    })

    it('increments the current question counter by one by sessionString', () => {
      return request(app).put('/api/sessions/12d9dc83-01d6-4085-9cb3-aed81af7b29c/next')
      .expect(201)
      .then(res => {
        expect(res.body.currentQuestion).to.equal(1)
      })
    })

    it('deletes a session', () => {
      return request(app).delete('/api/sessions/4')
      .expect(204)
    })
  })

  describe('student questions routes', () => {

    it('gets all student questions', () =>
      request(app).get('/api/studentQuestions')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(3)
      })
    )

    it('gets all single student question by id', () => {
      return request(app).get('/api/studentQuestions/1')
      .expect(200)
      .then(res => {
        expect(res.body.content).to.equal(studentQuestionOne.content)
      })
    })

    it('gets all student questions associated with a specific session', () => {
      return request(app).get('/api/studentQuestions/session/1')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(2)
      })
    })

    it('gets all student questions that have been answered', () => {
      return request(app).get('/api/studentQuestions/session/1/answered')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length.of(1)
      })
    })


    it('creates a new student question', () => {
      return request(app).post('/api/studentQuestions/')
      .send(studentQuestionFour)
      .expect(201)
      .then(res => {
        expect(res.body.content).to.equal(studentQuestionFour.content)
      })
    })

    it('updates an existing student question', () => {
      return request(app).put('/api/studentQuestions/1')
      .send({ content: 'updated content' })
      .expect(201)
      .then(res => {
        expect(res.body.content).to.equal('updated content')
      })
    })

    it('deletes a student question', () => {
      return request(app).delete('/api/studentQuestions/1')
      .expect(204)
    })
  })

})
