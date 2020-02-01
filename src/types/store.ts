import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { reducers } from '../reducers'

import { Ingredient, RecipeIngredient } from './'

export type RootState = ReturnType<typeof reducers>

export type RecipeState = RecipeIngredient[]

export type LoadingState = boolean

export type IngredientsState = Ingredient[]

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>
