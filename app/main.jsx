'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Routes from './routes'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

render (
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)
