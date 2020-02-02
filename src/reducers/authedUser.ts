import {
  SET_AUTHED_USER,
  AuthedUserActions,
} from '../actions/authedUser'

import { AuthedUserState } from '../types/store'

export const authedUser = (
  state = null,
  action: AuthedUserActions,
): AuthedUserState => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    default:
      return state
  }
}
