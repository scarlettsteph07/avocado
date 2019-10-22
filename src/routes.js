import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './App'
import { Grid, IngredientPage, Recipe } from './components/'
import { APPLICATION_PATHS as PATHS } from './lib/appConstants'

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
        <Route
          exact
          path={`/${PATHS.INGREDIENTS}`}
          render={(props) => (
            <App {...props}>
              <Grid {...props} />
            </App>
          )}
        />
        <Route
          exact
          path={`/${PATHS.INGREDIENTS}/:ingredientId`}
          render={(props) => (
            <App {...props}>
              <IngredientPage {...props} />
            </App>
          )}
        />
      </Switch>
    </Router>
  )
}
