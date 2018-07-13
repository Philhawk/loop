import React from 'react';
// import MuiThemeProvider from '@material-ui/core/styles';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main'),
);


// render(
//   <Provider store={store}>
//     <MuiThemeProvider>
//       <Routes />
//     </MuiThemeProvider>
//   </Provider>,
//   document.getElementById('main'),
// );
