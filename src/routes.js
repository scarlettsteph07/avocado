import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './App'
import { Recipe } from './components/'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <App {...props}>
              <Recipe />
            </App>
          )}
        />
      </Switch>
    </Router>
  )
}
