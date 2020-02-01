import { fetchInitialData, fetchAllIngredients } from '../helpers/api'
import { receiveRecipe } from './recipe'
import { loadIngredients } from './ingredients'

import { InitialData } from '../helpers/api'
import { Payload } from '../types/'
import { AppThunk } from '../types/store'

export const LOAD_APP = 'LOAD_APP'

interface LoadAppAction {
  type: typeof LOAD_APP
}

export type SharedActionTypes = LoadAppAction

const loadApp = (): LoadAppAction => ({ type: LOAD_APP })

export const handleFetchInitialData = (
  payload: Payload,
): AppThunk => (dispatch) => {
  return fetchInitialData(payload).then(
    ({ recipe, ingredients }: InitialData) => {
      dispatch(receiveRecipe(recipe))
      dispatch(loadIngredients(ingredients))
      dispatch(loadApp())
      fetchAllIngredients('webapp-dev')
    },
  )
}
