import { combineReducers } from 'redux'

import { user } from './user'
import { ingredients } from './ingredients'
import { loading } from './loading'
import { recipe } from './recipe'

export const reducers = combineReducers({
  user,
  recipe,
  ingredients,
  loading,
})
