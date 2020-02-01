import { fetchRecipeIngredients } from '../helpers/api'

import { Ingredient, Payload } from '../types/'
import { AppThunk } from '../types/store'

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const FETCH_RECIPE = 'FETCH_RECIPE'

interface ReceiveRecipeAction {
  type: typeof RECEIVE_RECIPE
  recipe: Ingredient[]
}

interface FetchRecipeAction {
  type: typeof FETCH_RECIPE
  recipe: Ingredient[]
}

export type RecipeActionTypes =
  | ReceiveRecipeAction
  | FetchRecipeAction

export const receiveRecipe = (
  recipe: Ingredient[],
): ReceiveRecipeAction => ({
  type: RECEIVE_RECIPE,
  recipe,
})

export const fetchRecipe = (
  recipe: Ingredient[],
): FetchRecipeAction => ({
  type: FETCH_RECIPE,
  recipe,
})

export const handleFetchRecipe = (payload: Payload): AppThunk => (
  dispatch,
) => {
  return fetchRecipeIngredients(payload).then((recipe) => {
    dispatch(fetchRecipe(recipe))
  })
}
