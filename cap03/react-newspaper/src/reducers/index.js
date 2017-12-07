import { combineReducers } from 'redux'
import news from './news'
import comment from './comment'
import category from './category'

export default combineReducers({
    news,
    comment,
    category,
  })
