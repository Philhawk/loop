const db = require('APP/db');

const seedUsers = () => db.Promise.each([
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', role: 'Teacher'},
  {name: 'Peter Exampleton', email: 'peter@example.com', password: '1234', role: 'Student'},
  {name: 'Susie Sampleton', email: 'susie@example.com', password: '1234', role: 'Student'},
  {name: 'Barb Sampling', email: 'barb@example.com', password: '1234', role: 'Student'},
  {name: 'Max Exampleton', email: 'max@max.max', password: '1234', role: 'Teacher'},
], user => db.model('users').create(user));

// const users = [
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', role: 'Teacher'},
//   {name: 'Peter Exampleton', email: 'peter@example.com', password: '1234', role: 'Student'},
//   {name: 'Susie Sampleton', email: 'susie@example.com', password: '1234', role: 'Student'},
//   {name: 'Barb Sampling', email: 'barb@example.com', password: '1234', role: 'Student'},
//   {name: 'Max Exampleton', email: 'max@max.max', password: '1234', role: 'Teacher'},
// ]
//
//
// var promises = [];
// for(var i = 0; i < users.length; i++) {
//   promises.push(db.model('users').create(users[i]))
// }

const seedLectures = () => db.Promise.each([
  {name: 'English II Othello', mood: 75, timeStarted: Date.UTC(2016, 11, 5, 8, 25), teacher_id: 1},
  {name: 'Express.js', mood: 90, timeStarted: Date.UTC(2016, 11, 8, 11, 30), teacher_id: 1},
  {name: 'Intro to Redux', mood: 20, timeStarted: Date.UTC(2016, 11, 13, 14, 40), teacher_id: 5}
], lecture => db.model('lectures').create(lecture));

const seedQuestions = () => db.Promise.each([
  {content: 'Who is the antagonist of Othello?', correctAnswer: 0, questionType: 'multipleChoice', choices: ['Iago', 'Othello', 'Cassio', 'Desdemona'], lecture_id: 1},
  {content: 'What are two ways Othello experienced racism in Act I?', correctAnswer: "Racial slurs from Brabantio and Roderigo", choices: [], questionType: 'openEnded', lecture_id: 1},
  {content: 'What is the method for creating new data?', correctAnswer: 1, questionType: 'multipleChoice', choices: ['GET', 'POST', 'PUT', 'DELETE'], lecture_id: 2},
  {content: 'Write a function for starting a server in express.', questionType: 'openEnded', correctAnswer: "app.listen(3000)", choices: [], lecture_id: 2},
  {content: 'Why is it bad practice to mutate the state in Redux?', questionType: 'openEnded', correctAnswer: "Because then you can't predict what will happen and the logger won't work", choices: [], lecture_id: 3},
  {content: 'What mechanism in Redux holds the state?', correctAnswer: 1, questionType: 'multipleChoice', choices: ['reducer', 'store', 'thunk', 'action creator'], lecture_id: 3},
], question => db.model('questions').create(question));

const seedResponses = () => db.Promise.each([
  {userResponse: 'Iago', timeStamp: Date.UTC(2016, 11, 5, 8, 30, 30), question_id: 1},
  {userResponse: 'Cassio', timeStamp: Date.UTC(2016, 11, 5, 8, 31, 30), question_id: 1},
  {userResponse: 'Iago and Roderigo used racial slurs when describing him', timeStamp: Date.UTC(2016, 11, 5, 8, 40, 30), question_id: 2},
  {userResponse: 'I dunno :(', timeStamp: Date.UTC(2016, 11, 5, 8, 41, 13), question_id: 2},
  {userResponse: 'POST', timeStamp: Date.UTC(2016, 11, 8, 11, 32, 30), question_id: 3},
  {userResponse: 'PUT', timeStamp: Date.UTC(2016, 11, 8, 11, 32, 55), question_id: 3},
  {userResponse: 'app.listen(3000)', timeStamp: Date.UTC(2016, 11, 8, 11, 52, 19), question_id: 4},
  {userResponse: 'app.startAllTheServersPlease(3000)', timeStamp: Date.UTC(2016, 11, 9, 11, 53, 39), question_id: 4},
  {userResponse: 'Because immutable data leads to less unexpected behavior.', timeStamp: Date.UTC(2016, 11, 13, 14, 44, 34), question_id: 5},
  {userResponse: 'Cause Tom said so.', timeStamp: Date.UTC(2016, 11, 13, 14, 45, 31), question_id: 5},
  {userResponse: 'store', timeStamp: Date.UTC(2016, 11, 13, 15, 15, 46), question_id: 6},
  {userResponse: 'reducer', timeStamp: Date.UTC(2016, 11, 13, 15, 16, 46), question_id: 6},
], response => db.model('responses').create(response));

seedSessions = () => db.Promise.each([
  {sessionString: '12d9dc83-01d6-4085-9cb3-aed81af7b29c', active: false, lecture_id: 1},
  {sessionString: 'bd6f8c3b-1443-4eee-aa37-c912b9a2bd60', active: false, lecture_id: 1},
  {sessionString: '64ab97b1-e2ce-4462-8145-0078bd7c946b', active: false, lecture_id: 2},
  {sessionString: '1a537699-3b81-4dbe-bf3d-507c801681a7', active: false, lecture_id: 2},
  {sessionString: '270ae15c-d8c9-4e86-bcc3-c05335876132', active: false, lecture_id: 3},
], session => db.model('sessions').create(session))


const seedParticipants = () => {
  let findingStudents = db.model('users').findAll({ where: { role: 'Student' }});
  let findingLectures = db.model('lectures').findAll();
  Promise.all([findingStudents, findingLectures])
  .then(values => {
    const foundStudents = values[0];
    const foundLectures = values[1];
    const lecturesWithStudents = foundLectures.map(lecture => {
      lecture.setUsers(foundStudents)
    })
  })
}


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedLectures)
  .then(lectures => console.log(`Seeded ${lectures.length} lectures OK`))
  .then(seedQuestions)
  .then(questions => console.log(`Seeded ${questions.length} questions OK`))
  .then(seedResponses)
  .then(responses => console.log(`Seeded ${responses.length} responses OK`))
  .then(seedSessions)
  .then(sessions => console.log(`Seeded ${sessions.length} sessions OK`))
  .then(seedParticipants)
  .then(response => console.log('Successfully seeded the responses.'))
  .catch(error => console.error(error))
  // .finally(() => db.close())
