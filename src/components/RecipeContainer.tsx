import { connect, ConnectedProps } from 'react-redux'

import { handleFetchInitialData } from '../actions'
import { handleFetchRecipe } from '../actions/recipe'
import { Recipe } from './'

import { RecipeIngredient } from '../types/'
import { RootState } from '../types/store'

interface State {
  recipe: RecipeIngredient[]
  loading: boolean
}

const mapStateToProps = ({ recipe, loading }: RootState): State => ({
  recipe,
  loading,
})
const mapDispatchToProps = {
  handleFetchInitialData,
  handleFetchRecipe,
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {}

export const RecipeContainer = connector(Recipe)
