import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import { AppRouter } from './routes'
import { theme } from './theme'
import { reducers } from './reducers'
import { middleware } from './middleware'

import * as serviceWorker from './serviceWorker'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
