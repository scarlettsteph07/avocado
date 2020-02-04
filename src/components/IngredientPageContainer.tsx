import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'

import { IngredientPage } from './'

import { Ingredient } from '../types'

interface State {
  ingredient: Ingredient | undefined
  loading: boolean
}

interface RootState {
  ingredients: Ingredient[]
  loading: boolean
}

type TParams = { ingredientId: string }

const mapStateToProps = (
  { ingredients, loading }: RootState,
  ownProps: RouteComponentProps<TParams>,
): State => {
  const { ingredientId } = ownProps.match.params
  const ingredient = _.head(
    _.filter(
      ingredients,
      (ingredient) => _.kebabCase(ingredient.name) === ingredientId,
    ),
  )
  return { ingredient, loading }
}

const mapDispatchToProps = {}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {}

export const IngredientPageContainer = connector(IngredientPage)
