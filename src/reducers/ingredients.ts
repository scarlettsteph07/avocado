/* eslint-disable indent */
/* eslint-disable no-case-declarations */
import {
  LOAD_INGREDIENTS,
  ADD_INGREDIENT,
  ADD_STYLE,
  REMOVE_STYLE,
  IngredientsActions,
} from '../actions/ingredients'

import { IngredientsState } from '../types/store'
import { Ingredient } from '../types'

const initialState: Ingredient[] = [
  {
    name: '',
    required: false,
    style: [''],
    type: [''],
  },
]

export const ingredients = (
  state: Ingredient[] = initialState,
  action: IngredientsActions,
): IngredientsState => {
  switch (action.type) {
    case LOAD_INGREDIENTS:
      return action.ingredients
    case ADD_INGREDIENT:
      return [...state, action.ingredient]
    case ADD_STYLE:
      return state.map((ingredient) =>
        ingredient.name !== action.name
          ? ingredient
          : {
              ...ingredient,
              style: [...ingredient.style, action.style],
            },
      )
    case REMOVE_STYLE:
      return state.map((ingredient) =>
        ingredient.name !== action.name
          ? ingredient
          : {
              ...ingredient,
              style: ingredient.style.filter(
                (style) => style !== action.style,
              ),
            },
      )
    default:
      return state
  }
}
