export const SET_ERROR = 'SET_ERROR'

export interface SetErrorAction {
    type: typeof SET_ERROR
    errorName: string
}

export type ErrorActions = SetErrorAction

export const setError = (errorName: string): SetErrorAction => ({
    type: SET_ERROR,
    errorName,
})
