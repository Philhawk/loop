import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  currentQuestion: require('./currentQuestion').default
})

export default rootReducer
