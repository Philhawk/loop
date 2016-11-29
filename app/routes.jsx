import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import io from 'socket.io-client'
//components
import App from './components/App/App';
import LoginSignupChoice from './components/LoginSignupChoice';
import Loop from './components/Loop/Loop';
import LoopAnalysis from './components/Loop/LoopAnalysis';
import LoopStudentAnalysis from './components/Loop/LoopStudentAnalysis';
import TeacherCreateLoop from './components/TeacherCreateLoop/TeacherCreateLoop';
import StudentLoop from './components/StudentLoop/StudentLoop';
import StudentLandingPage from './components/StudentLandingpage/StudentLandingpage'
import store from './store';
import {createSocket} from './reducers/socket';
import {fetchCurrentSession} from './reducers/session';
import {fetchQuestionsBySessionString} from './reducers/questionsList';
import {getAllStudentQuestionsByLoop} from './reducers/studentQuestions';
import {fetchQuestionsAnsweredLength} from './reducers/answeredQuestions';
import { callSetCurrentQuestion } from './reducers/currentQuestion';
import { fetchActiveSessions } from './reducers/activeSessions';


const onLoopEnter = () => {
  const socket = io.connect();
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: store.getState().session.sessionString,
    role: store.getState().auth && store.getState().auth.role
  })
}

const onLoopFinish = () => {
  store.dispatch(fetchQuestionsAnsweredLength({ session_id: store.getState().session.id}))
  store.dispatch(getAllStudentQuestionsByLoop({ session_id: store.getState().session.id}))
}

const onStudentLoopEnter = (data) => {
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

const onForStudentsEnter = () => {
  store.dispatch(fetchActiveSessions())
}

const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App}/>
      <Route path = 'welcome' component={LoginSignupChoice} />
      <Route path = 'create-loop' component={TeacherCreateLoop} />
      <Route path ='loop/*' component={Loop} onEnter={onLoopEnter}/>
      <Route path='studentLoop/:loopUuId' component={StudentLoop} onEnter={onStudentLoopEnter} />
      <Route path='post-loop-analysis' component={LoopAnalysis} onEnter={onLoopFinish} />
      <Route path='post-loop-student-analysis' component={LoopStudentAnalysis} />
      <Route path='for-students' component={StudentLandingPage} onEnter={onForStudentsEnter} />
    </Route>
  </Router>
);



export default routes;
