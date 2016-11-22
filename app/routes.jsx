import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import io from 'socket.io-client'
//components
import App from './components/App/App';
import Loop from './components/Loop/Loop';
import TeacherCreateLoop from './components/TeacherCreateLoop/TeacherCreateLoop';
import StudentLoop from './components/StudentLoop/StudentLoop';
import store from './store';
import {createSocket} from './reducers/socket';


const onLoopEnter = () => {
  console.log(store.getState().session.sessionString)
  console.log(store.getState().auth.role)
  const socket = io.connect();
  store.dispatch(createSocket(socket));
  socket.emit('loopCreated', {
    loopUuId: store.getState().session.sessionString,
    role: store.getState().auth && store.getState().auth.role
  })
}

const onStudentEnter = (data) => {
  console.log(data)
  const socket = io.connect();
  socket.emit('loopCreated', {
    loopUuId: data.params.loopUuId,
    role: "Student"
  })
}


const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App}/>
      <Route path = 'create-loop' component={TeacherCreateLoop} />
      <Route path ='loop/*' component={Loop} onEnter={onLoopEnter}/>
      <Route path='studentLoop/:loopUuId' component={StudentLoop} onEnter={onStudentEnter} />
    </Route>
  </Router>
);

export default routes;
