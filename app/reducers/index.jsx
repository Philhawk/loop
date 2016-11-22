import { combineReducers } from 'redux'
import auth from './auth';
import currentQuestion from './currentQuestion';
import questionsList from './questionsList';
import session from './session';
import lecture from './lecture';
import socket from './socket';

const rootReducer = combineReducers({
  auth,
  currentQuestion,
  questionsList,
  lecture,
  session,
  socket
})

export default rootReducer
