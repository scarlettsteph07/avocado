import { fetchInitialData } from '../helpers/api'
import { receiveRecipe } from './recipe'

import { Ingredient, Payload } from '../types/'
import { AppThunk } from '../types/store'

export const handleFetchInitialData = (
  payload: Payload,
): AppThunk => (dispatch) => {
  return fetchInitialData(payload).then((recipe: Ingredient[]) => {
    dispatch(receiveRecipe(recipe))
  })
}
