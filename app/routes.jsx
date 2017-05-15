// outside libraries
import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import io from 'socket.io-client';

// components
import App from './components/App/App';
import LoginSignupChoice from './components/LoginSignupChoice';
import Loop from './components/Loop/Loop';
import LoopAnalysis from './components/Loop/LoopAnalysis';
import LoopStudentAnalysis from './components/Loop/LoopStudentAnalysis';
import TeacherCreateLoop from './components/TeacherCreateLoop/TeacherCreateLoop';
import TeacherIntro from './components/TeacherCreateLoop/TeacherIntro';
import StudentLoop from './components/StudentLoop/StudentLoop';
import StudentLandingPage from './components/StudentLandingPage/StudentLandingPage';
import TeacherProfilePage from './components/TeacherProfilePage/TeacherProfilePage';
import LoopStats from './components/TeacherProfilePage/LoopStats';
import PreviousLoops from './components/TeacherProfilePage/PreviousLoops';
import Entities from './components/TeacherProfilePage/Entities';
import UsersList from './components/TeacherProfilePage/UsersList';

// reducers
import store from './store';
import { createSocket } from './reducers/socket';
import { fetchCurrentSession } from './reducers/session';
import { fetchQuestionsBySessionString, addInitialState } from './reducers/questionsList';
import { getAllStudentQuestionsByLoop } from './reducers/studentQuestions';
import { fetchQuestionsAnsweredLength } from './reducers/answeredQuestions';
import { callSetCurrentQuestion } from './reducers/currentQuestion';
import { fetchActiveSessions } from './reducers/activeSessions';
import { fetchLecturesByTeacher, fetchAllLectures } from './reducers/lectureList';
import { fetchEntities } from './reducers/entities';

// add the initial state if one hasn't been set,
// open a socket, and assign a sessionString to the loopUuId,
// assign the return value of auth and role on the store
const onLoopEnter = () => {
  if (!store.getState().questionsList[0].default) {
    store.dispatch(addInitialState());
  }
  const socket = io.connect();
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: store.getState().session.sessionString,
    role: store.getState().auth && store.getState().auth.role,
  });
};

const onLoopFinish = () => {
  store.dispatch(fetchQuestionsAnsweredLength({ session_id: store.getState().session.id }));
  store.dispatch(getAllStudentQuestionsByLoop({ session_id: store.getState().session.id }));
};

const onStudentLoopEnter = (data) => {
  const socket = io.connect();
  const getQuestions = store.dispatch(fetchQuestionsBySessionString({ sessionString: data.params.loopUuId }));
  const getSession = store.dispatch(fetchCurrentSession({ sessionString: data.params.loopUuId }));
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: data.params.loopUuId,
    role: 'Student',
  });
  Promise.all([getSession, getQuestions])
  .then(() => {
    store.dispatch(callSetCurrentQuestion(store.getState().questionsList[store.getState().session.currentQuestion - 1]));
  });
};

const onForStudentsEnter = () => {
  store.dispatch(fetchActiveSessions());
};

const onTeacherProfileEnter = () => {
  if (store.getState().auth.role === 'Admin') {
    store.dispatch(fetchAllLectures());
    store.dispatch(fetchEntities());
  } else {
    store.dispatch(fetchLecturesByTeacher({ id: store.getState().auth.id }));
  }
};

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="welcome" component={LoginSignupChoice} />
      <Route path="create-intro" component={TeacherIntro} />
      { /*TeacherCreateLoop is a backup*/ }
      <Route path="create-loop" component={TeacherCreateLoop} />
      <Route path="loop/*" component={Loop} onEnter={onLoopEnter} />
      <Route path="studentLoop/:loopUuId" component={StudentLoop} onEnter={onStudentLoopEnter} />
      <Route path="post-loop-analysis" component={LoopAnalysis} onEnter={onLoopFinish} />
      <Route path="post-loop-student-analysis" component={LoopStudentAnalysis} />
      <Route path="activeLoops" component={StudentLandingPage} onEnter={onForStudentsEnter} />
      <Route path="profile" component={TeacherProfilePage} onEnter={onTeacherProfileEnter}>
        <Route path="/loopStats" component={LoopStats} />
        <Route path="previousLoops" component={PreviousLoops} />
        <Route path="entities" component={Entities} />
        <Route path="usersList" component={UsersList} />
      </Route>
    </Route>
  </Router>
);


export default routes;
