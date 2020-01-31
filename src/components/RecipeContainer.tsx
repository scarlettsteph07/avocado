import { connect, ConnectedProps } from 'react-redux'

import { handleFetchInitialData } from '../actions'
import { Recipe } from './'

import { Ingredient } from '../types/'
import { RootState } from '../types/store'

interface State {
  recipe: Ingredient[]
}

const mapStateToProps = ({ recipe }: RootState): State => ({
  recipe,
})
const mapDispatchToProps = {
  handleFetchInitialData,
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {}

export const RecipeContainer = connector(Recipe)
