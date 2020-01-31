import { Ingredient } from '../types/'

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

interface ReceiveRecipeAction {
  type: typeof RECEIVE_RECIPE
  recipe: Ingredient[]
}

export type RecipeActionTypes = ReceiveRecipeAction

export const receiveRecipe = (
  recipe: Ingredient[],
): ReceiveRecipeAction => ({
  type: RECEIVE_RECIPE,
  recipe,
})
