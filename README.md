# Loop

[![Build Status](https://semaphoreapp.com/api/v1/projects/d4cca506-99be-44d2-b19e-176f36ec8cf1/128505/shields_badge.svg)](https://semaphoreapp.com/boennemann/badges) [![NPM version](https://badge.fury.io/js/badge-list.svg)](http://badge.fury.io/js/badge-list) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

We're Loop, a real-time communication tool for teachers to interact with their students in the classroom.

## To Start

After you have a repo on your machine:

```
git remote add loop https://github.com/Philhawk/loop.git
git fetch loop
git merge loop/master
npm install
npm run build-watch
npm start
```

`npm start` doesn't build, so watch out for that. The reason it doesn't build is because you
probably want to watch the build and run me in separate terminals. Otherwise, build errors get
all mixed in with HTTP request logging.

## To Test

We've used Mocha, Chai and Chai Enzyme predominantly for testing.

From the project root:

```
npm test
```

## Navigating

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)


## Tools

  - [React](https://facebook.github.io/react/)
  - [Redux](http://redux.js.org/docs/introduction/)
  - [Express](http://expressjs.com/)
  - [Node](https://nodejs.org/en/)
  - [Sequelize](http://docs.sequelizejs.com/en/v3/)
  - [Material UI](http://www.material-ui.com/)
  - [Socket.Io](http://socket.io/)
  - [Babel](https://babeljs.io/)
  - [D3](https://d3js.org/)



## Style Guide

We use `require` and `module.exports` in `.js` files.

We use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

## Written with Love by ...

  - [Phil Jacob](https://github.com/Philhawk)
  - [Andrew Gionfriddo](https://github.com/agionfriddo)
  - [George Smith-Sweeper](https://github.com/GeorgeSmith-Sweeper)
  - [Andrew Vays](https://github.com/avays)



