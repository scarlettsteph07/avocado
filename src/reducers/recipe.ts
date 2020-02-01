import { LOAD_RECIPE, RecipeActionTypes } from '../actions/recipe'

import { RecipeState } from '../types/store'

export const recipe = (
  state = [],
  action: RecipeActionTypes,
): RecipeState => {
  switch (action.type) {
    case LOAD_RECIPE:
      return action.recipe
    default:
      return state
  }
}
