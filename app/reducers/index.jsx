import { combineReducers } from 'redux'
import auth from './auth';
import currentQuestion from './currentQuestion';
import questionsList from './questionsList';

const rootReducer = combineReducers({
  auth,
  currentQuestion,
  questionsList
})

export default rootReducer
