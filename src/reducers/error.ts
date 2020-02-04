import { SET_ERROR, ErrorActions } from '../actions/errors'

import { ErrorState } from '../types/store'

export const error = (
  state = '',
  action: ErrorActions,
): ErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorName
    default:
      return state
  }
}
