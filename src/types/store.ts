import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { reducers } from '../reducers'

import { Ingredient, RecipeIngredient } from './'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>

export type UserState = string | null

export type IngredientsState = Ingredient[]

export type LoadingState = boolean

export type RecipeState = RecipeIngredient[]

export type RootState = ReturnType<typeof reducers>
