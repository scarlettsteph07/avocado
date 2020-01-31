import { RECEIVE_RECIPE, RecipeActionTypes } from '../actions/recipe'

import { RecipeState } from '../types/store'

export const recipe = (
  state = [],
  action: RecipeActionTypes,
): RecipeState => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return [...state, ...action.recipe]
    default:
      return state
  }
}
