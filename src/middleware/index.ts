import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const middleware = composeWithDevTools(applyMiddleware(thunk))
