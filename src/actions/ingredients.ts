import { Ingredient } from '../types/'

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'

interface LoadIngredientsAction {
  type: typeof LOAD_INGREDIENTS
  ingredients: Ingredient[]
}

export type IngredientsActions = LoadIngredientsAction

export const loadIngredients = (
  ingredients: Ingredient[],
): LoadIngredientsAction => ({
  type: LOAD_INGREDIENTS,
  ingredients,
})
