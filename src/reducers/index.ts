import { combineReducers } from 'redux'

import { recipe } from './recipe'
import { loading } from './loading'

export const reducers = combineReducers({ recipe, loading })
