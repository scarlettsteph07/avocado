import {
  fetchInitialData,
  getUserId
} from '../helpers/api'
import { loadRecipe } from './recipe'
import { loadIngredients } from './ingredients'
import { setError } from './errors'
import { setUser } from './user'

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
): AppThunk => async (dispatch, getState) => {
  try {
    const userId = await getUserId()
    dispatch(setUser(userId))

    const { user } = getState()
    const { recipe, ingredients } = await fetchInitialData(user, payload)

    dispatch(loadRecipe(recipe))
    dispatch(loadIngredients(ingredients))
    dispatch(loadApp())
  } catch (e) {
    dispatch(setError(e))
  }

}
