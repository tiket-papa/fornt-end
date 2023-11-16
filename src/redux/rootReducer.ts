'use client'

import { combineReducers } from 'redux'
import counterReducer from './Features/Counter/counterSlice'
import aouthReducer from './Features/Auth/slice'

export default combineReducers({
  counter: counterReducer,
  auth: aouthReducer
})
