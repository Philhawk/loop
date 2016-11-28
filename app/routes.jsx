import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import io from 'socket.io-client'
//components
import App from './components/App/App';
import Login from './components/Login/Login';
import Loop from './components/Loop/Loop';
import TeacherCreateLoop from './components/TeacherCreateLoop/TeacherCreateLoop';
import StudentLoop from './components/StudentLoop/StudentLoop';
import store from './store';
import {createSocket} from './reducers/socket';
import {fetchCurrentSession} from './reducers/session';
import {fetchQuestionsBySessionString} from './reducers/questionsList';
import { callSetCurrentQuestion } from './reducers/currentQuestion'


const onLoopEnter = () => {
  const socket = io.connect();
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: store.getState().session.sessionString,
    role: store.getState().auth && store.getState().auth.role
  })
}

const onStudentEnter = (data) => {
  const socket = io.connect();
  const getQuestions = store.dispatch(fetchQuestionsBySessionString({ sessionString: data.params.loopUuId}))
  const getSession = store.dispatch(fetchCurrentSession({ sessionString: data.params.loopUuId }))
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: data.params.loopUuId,
    role: "Student"
  })
  Promise.all([getSession, getQuestions])
  .then(() => {
    store.dispatch(callSetCurrentQuestion(store.getState().questionsList[store.getState().session.currentQuestion - 1]))
  })
}


const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App}/>
      <Route path = 'welcome' component={Login} />
      <Route path = 'create-loop' component={TeacherCreateLoop} />
      <Route path ='loop/*' component={Loop} onEnter={onLoopEnter}/>
      <Route path='studentLoop/:loopUuId' component={StudentLoop} onEnter={onStudentEnter} />
    </Route>
  </Router>
);

export default routes;
