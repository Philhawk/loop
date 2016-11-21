import { combineReducers } from 'redux'
import auth from './auth';
import currentQuestion from './currentQuestion';
import questionsList from './questionsList';
import lecture from './lecture';

const rootReducer = combineReducers({
  auth,
  currentQuestion,
  questionsList,
  lecture
})

export default rootReducer
