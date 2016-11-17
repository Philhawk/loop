import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

//components
import App from './components/App/App';

const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App}/>
    </Route>
  </Router>
);

export default routes;
