import { combineReducers } from 'redux'
import auth from './auth';
import currentQuestion from './currentQuestion';
import questionsList from './questionsList';
import session from './session';
import lecture from './lecture';
import socket from './socket';
import studentQuestions from './studentQuestions';
import studentMood from './studentMood';
import answeredQuestions from './answeredQuestions';
import data from './data';
import openEndedAnswers from './openEndedAnswers';
import activeSessions from './activeSessions';
import lectureList from './lectureList';
import entities from './entities';

const rootReducer = combineReducers({
  auth,
  currentQuestion,
  questionsList,
  lecture,
  session,
  socket,
  studentQuestions,
  studentMood,
  data,
  openEndedAnswers,
  answeredQuestions,
  activeSessions,
  lectureList,
  entities
})

export default rootReducer
