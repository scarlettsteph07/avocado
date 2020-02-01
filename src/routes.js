import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import {
  IngredientsGridContainer,
  IngredientPage,
  RecipeContainer,
} from './components/'
import { AppContainer } from './AppContainer'
import { APPLICATION_PATHS as PATHS } from './lib/appConstants'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <AppContainer {...props}>
              <RecipeContainer />
            </AppContainer>
          )}
        />
        <Route
          exact
          path={`/${PATHS.INGREDIENTS}`}
          render={(props) => (
            <AppContainer {...props}>
              <IngredientsGridContainer />
            </AppContainer>
          )}
        />
        <Route
          exact
          path={`/${PATHS.INGREDIENTS}/:ingredientId`}
          render={(props) => (
            <AppContainer {...props}>
              <IngredientPage {...props} />
            </AppContainer>
          )}
        />
      </Switch>
    </Router>
  )
}
