import { combineReducers } from 'redux'
import counter from './counter.js'

const addApp =  combineReducers({
  counter
})
export default addApp
