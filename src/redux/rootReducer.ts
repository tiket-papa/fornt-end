'use client'

import { combineReducers } from 'redux'
import counterReducer from './Features/Counter/counterSlice'

export default combineReducers({
  counter: counterReducer
})
