import { combineReducers } from 'redux'
import text from './text'
import list from './list'
import fetch from './fetch'

export default combineReducers({
  text,
  list,
  fetch
})