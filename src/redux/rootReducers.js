import { combineReducers } from 'redux'
import postReducer from './reducers/postReducer'

const rootreducers = combineReducers({
  data: postReducer,
})

export default rootreducers
