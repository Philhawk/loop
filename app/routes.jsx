import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

//components
import App from './components/App/App';
import Loop from './components/Loop/Loop';
import TeacherCreateLoop from './components/TeacherCreateLoop/TeacherCreateLoop';
import StudentLoop from './components/StudentLoop/StudentLoop';
import store from './store';


const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App}/>
      <Route path = 'create-loop' component={TeacherCreateLoop} />
      <Route path ='loop/*' component={Loop} />
    </Route>
  </Router>
);

export default routes;
