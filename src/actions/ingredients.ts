import {
  saveIngredient,
  addIngredientStyle,
  updateIngredientStyle,
  deleteStyle,
} from '../helpers/api'
import { setError } from './errors'

import { Ingredient } from '../types/'
import { AppThunk } from '../types/store'

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_STYLE = 'ADD_STYLE'
export const UPDATE_STYLE = 'UPDATE_STYLE'
export const REMOVE_STYLE = 'REMOVE_STYLE'

interface LoadIngredientsAction {
  type: typeof LOAD_INGREDIENTS
  ingredients: Ingredient[]
}

interface AddIngredientAction {
  type: typeof ADD_INGREDIENT
  ingredient: Ingredient
}

interface AddStyleAction {
  type: typeof ADD_STYLE
  name: string
  style: string
}

interface UpdateStyleAction {
  type: typeof UPDATE_STYLE
  name: string
  style: string
  oldStyle: string
}

interface RemoveStyleAction {
  type: typeof REMOVE_STYLE
  name: string
  style: string
}

export type IngredientsActions =
  | LoadIngredientsAction
  | AddIngredientAction
  | AddStyleAction
  | UpdateStyleAction
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

export const addStyle = (
  name: string,
  style: string,
): AddStyleAction => ({
  type: ADD_STYLE,
  name,
  style,
})

export const handleSaveStyle = (
  name: string,
  style: string,
): AppThunk => (dispatch, getState) => {
  const { user } = getState()
  return addIngredientStyle(name, style, user)
    .then(() => {
      dispatch(addStyle(name, style))
    })
    .catch((e) => {
      dispatch(setError(e))
    })
}

export const updateStyle = (
  name: string,
  style: string,
  oldStyle: string,
): UpdateStyleAction => ({
  type: UPDATE_STYLE,
  name,
  style,
  oldStyle,
})

export const handleUpdateStyle = (
  name: string,
  style: string,
  oldStyle: string,
): AppThunk => (dispatch, getState) => {
  const { user } = getState()
  return updateIngredientStyle(name, style, oldStyle, user).then(
    () => {
      dispatch(updateStyle(name, style, oldStyle))
    },
  )
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
