export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export interface SetAuthedUserAction {
  type: typeof SET_AUTHED_USER
  id: string
}

export type AuthedUserActions = SetAuthedUserAction

export const setAuthedUser = (id: string): SetAuthedUserAction => ({
  type: SET_AUTHED_USER,
  id,
})
