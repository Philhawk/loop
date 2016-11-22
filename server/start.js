'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
const pkg = require('APP')

const app = express()

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
    })

    socket.on('studentAsk', ({ question, sessionString }) => {
      console.log(question)
      io.in(sessionString).emit('newStudentQuestion', { question })
    })

    socket.on('studentMoodClick', ({ mood }) => {
      console.log(mood)
      io.emit('studentMoodIndex', { mood })
    })

  })
}
