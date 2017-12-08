import { combineReducers } from 'redux'
import article from './article'
import comment from './comment'
import category from './category'

export default combineReducers({
    article,
    comment,
    category,
  })