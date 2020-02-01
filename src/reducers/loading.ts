import { LOAD_APP, SharedActionTypes } from '../actions'

import { LoadingState } from '../types/store'

export const loading = (
  state = true,
  action: SharedActionTypes,
): LoadingState => {
  switch (action.type) {
    case LOAD_APP:
      return false
    default:
      return state
  }
}
