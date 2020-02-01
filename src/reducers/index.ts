import { combineReducers } from 'redux'

import { recipe } from './recipe'
import { ingredients } from './ingredients'
import { loading } from './loading'

export const reducers = combineReducers({
  recipe,
  ingredients,
  loading,
})
