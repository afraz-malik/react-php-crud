import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { userReducer } from './reducer.js'

const rootReducers = combineReducers({ userReducer })

const logger = createLogger()

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
)
