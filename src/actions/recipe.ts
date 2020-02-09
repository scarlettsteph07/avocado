import { fetchRecipeIngredients } from '../helpers/api'
import { formatRecipePayload } from '../helpers/formatter'

import { RecipeIngredient, Payload } from '../types/'
import { AppThunk } from '../types/store'

export const LOAD_RECIPE = 'LOAD_RECIPE'

interface LoadRecipeAction {
  type: typeof LOAD_RECIPE
  recipe: RecipeIngredient[]
}

export type RecipeActionTypes = LoadRecipeAction

export const loadRecipe = (
  recipe: RecipeIngredient[],
): LoadRecipeAction => ({
  type: LOAD_RECIPE,
  recipe,
})

export const handleFetchRecipe = (payload: Payload): AppThunk => (
  dispatch,
  getState,
) => {
  const { user } = getState()
  return fetchRecipeIngredients(
    user,
    formatRecipePayload(payload),
  ).then((recipe) => {
    dispatch(loadRecipe(recipe))
  })
}
