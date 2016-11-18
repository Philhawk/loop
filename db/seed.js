const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedQuestions = () => db.Promise.map([
  {content: 'Who is the antagonist of Othello?', correctAnswer: 'Iago', questionType: 'multipleChoice'}

], question => db.model('question').create(question))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedQuestions)
  .then(questions => console.log(`Seeded ${questions.length} questions OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
