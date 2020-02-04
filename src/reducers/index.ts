import { combineReducers } from 'redux'

import { user } from './user'
import { ingredients } from './ingredients'
import { loading } from './loading'
import { recipe } from './recipe'
import { error } from './error'

export const reducers = combineReducers({
  user,
  recipe,
  ingredients,
  loading,
  error,
})
