import { combineReducers } from 'redux'

import { authedUser } from './authedUser'
import { ingredients } from './ingredients'
import { loading } from './loading'
import { recipe } from './recipe'

export const reducers = combineReducers({
  authedUser,
  recipe,
  ingredients,
  loading,
})
