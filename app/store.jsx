// import {persistStore, autoRehydrate} from 'redux-persist'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

// persistStore(store)

export default store
