import { SET_USER, UserActions } from '../actions/user'

import { UserState } from '../types/store'

export const user = (
  state = null,
  action: UserActions,
): UserState => {
  switch (action.type) {
    case SET_USER:
      return action.id
    default:
      return state
  }
}
