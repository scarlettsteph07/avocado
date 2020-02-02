import {
  fetchInitialData,
  getUserId,
  InitialData,
} from '../helpers/api'
import { loadRecipe } from './recipe'
import { loadIngredients } from './ingredients'
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
): AppThunk => (dispatch, getState) => {
  getUserId()
    .then((userId: string) => dispatch(setUser(userId)))
    .then(() => {
      const { user } = getState()
      return fetchInitialData(user, payload).then(
        ({ recipe, ingredients }: InitialData) => {
          dispatch(loadRecipe(recipe))
          dispatch(loadIngredients(ingredients))
          dispatch(loadApp())
        },
      )
    })
}
