'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const passport = require('passport');
const compression = require('compression');

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
const pkg = require('APP')

const app = express()
app.use(compression())

if (!pkg.isProduction && !pkg.isTesting) {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
}

module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Authentication middleware
  .use(passport.initialize())
  .use(passport.session())

  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve our api
  .use('/api', require('./api'))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

// We want to export the io, so we attach it to the module.exports app instance

if (module === require.main) {
  // Start listening only if we're the main module.
  //
  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module

  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )

  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('Client connected.')


    socket.on('loopCreated', ({ loopUuId, role }) => {
      socket.join(loopUuId)
      console.log(`A ${role} just joined loop ${loopUuId}`)
      if (role === 'Student') {
        io.in(loopUuId).emit('studentJoined')
      }
    })

    socket.on('studentAsk', ({ question, sessionString }) => {
      console.log(question)
      io.in(sessionString).emit('newStudentQuestion', { question })
    })

    socket.on('studentMoodClick', ({ mood, sessionString }) => {
      io.in(sessionString).emit('studentMoodIndex', { mood })
    })

    socket.on('teacherAsk', ({ question, sessionString }) => {
      io.in(sessionString).emit('newTeacherQuestion', { question })
    })

    socket.on('submitMultipleChoice', ({ answer, sessionString }) => {
      io.in(sessionString).emit('studentMultipleChoiceAnswer', { answer })
    })

    socket.on('submitOpenEnded', ({ answer, sessionString }) => {
      io.in(sessionString).emit('studentOpenEndedAnswer', { answer })
    })

    socket.on('teacherSendAnswer', ({ correctAnswer, sessionString, questionType }) => {
      console.log("CORRECTANSWER", correctAnswer)
      io.in(sessionString).emit('studentReceieveAnswer' , { correctAnswer, questionType })
    })

    socket.on('teacherEndsLecture', ({ sessionString }) => {
      io.in(sessionString).emit('endStudentLecture')
    })

    socket.on('disconnecting', () => {
      let rooms = socket.rooms
      for(let room in rooms) {
        io.in(room).emit('studentLeft')
      }
    })
  })
}
