import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  user: require('./activeUser').default
})

export default rootReducer
