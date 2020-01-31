import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { reducers } from '../reducers'

import { Ingredient } from './'

export type RootState = ReturnType<typeof reducers>

export type RecipeState = Ingredient[]

export type LoadingState = boolean

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>
