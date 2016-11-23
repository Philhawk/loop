import { combineReducers } from 'redux'
import auth from './auth';
import currentQuestion from './currentQuestion';
import questionsList from './questionsList';
import session from './session';
import lecture from './lecture';
import socket from './socket';
import studentQuestions from './studentQuestions';
import studentMood from './studentMood';
import data from './data';

const rootReducer = combineReducers({
  auth,
  currentQuestion,
  questionsList,
  lecture,
  session,
  socket,
  studentQuestions,
  studentMood,
  data
})

export default rootReducer
