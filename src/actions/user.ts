export const SET_USER = 'SET_USER'

export interface SetUserAction {
  type: typeof SET_USER
  id: string
}

export type UserActions = SetUserAction

export const setUser = (id: string): SetUserAction => ({
  type: SET_USER,
  id,
})
