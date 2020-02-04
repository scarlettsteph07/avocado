import { saveIngredient } from '../helpers/api'

import { Ingredient } from '../types/'
import { AppThunk } from '../types/store'

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

interface LoadIngredientsAction {
  type: typeof LOAD_INGREDIENTS
  ingredients: Ingredient[]
}

interface AddIngredientAction {
  type: typeof ADD_INGREDIENT
  ingredient: Ingredient
}

export type IngredientsActions =
  | LoadIngredientsAction
  | AddIngredientAction

export const loadIngredients = (
  ingredients: Ingredient[],
): LoadIngredientsAction => ({
  type: LOAD_INGREDIENTS,
  ingredients,
})

export const addIngredient = (
  ingredient: Ingredient,
): AddIngredientAction => ({
  type: ADD_INGREDIENT,
  ingredient,
})

export const handleSaveIngredient = (
  ingredient: Ingredient,
): AppThunk => (dispatch, getState) => {
  const { user } = getState()
  return saveIngredient(user, ingredient).then(() => {
    dispatch(addIngredient(ingredient))
  })
}
