import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { logger } from './logger'

export const middleware = composeWithDevTools(
  applyMiddleware(thunk, logger),
)
