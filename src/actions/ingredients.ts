import { saveIngredient, deleteStyle } from '../helpers/api'
import { setError } from './errors'

import { Ingredient } from '../types/'
import { AppThunk } from '../types/store'

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_STYLE = 'REMOVE_STYLE'

interface LoadIngredientsAction {
  type: typeof LOAD_INGREDIENTS
  ingredients: Ingredient[]
}

interface AddIngredientAction {
  type: typeof ADD_INGREDIENT
  ingredient: Ingredient
}

interface RemoveStyleAction {
  type: typeof REMOVE_STYLE
  name: string
  style: string
}

export type IngredientsActions =
  | LoadIngredientsAction
  | AddIngredientAction
  | RemoveStyleAction

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

export const removeStyle = (
  name: string,
  style: string,
): RemoveStyleAction => ({
  type: REMOVE_STYLE,
  name,
  style,
})

export const handleRemoveStyle = (
  name: string,
  style: string,
): AppThunk => (dispatch, getState) => {
  const { user } = getState()
  return deleteStyle(name, style, user)
    .then(() => {
      dispatch(removeStyle(name, style))
    })
    .catch((e) => {
      dispatch(setError(e))
    })
}
