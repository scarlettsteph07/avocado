import {
  LOAD_INGREDIENTS,
  ADD_INGREDIENT,
  IngredientsActions,
} from '../actions/ingredients'

import { IngredientsState } from '../types/store'

export const ingredients = (
  state = [],
  action: IngredientsActions,
): IngredientsState => {
  switch (action.type) {
    case LOAD_INGREDIENTS:
      return action.ingredients
    case ADD_INGREDIENT:
      return [...state, action.ingredient]
    default:
      return state
  }
}
