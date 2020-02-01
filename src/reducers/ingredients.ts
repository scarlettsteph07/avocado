import {
  LOAD_INGREDIENTS,
  IngredientsActions,
} from '../actions/ingredients'

import { IngredientsState } from '../types/store'

export const ingredients = (
  state = [],
  action: IngredientsActions,
): IngredientsState => {
  switch (action.type) {
    case LOAD_INGREDIENTS:
      return [...state, ...action.ingredients]
    default:
      return state
  }
}
