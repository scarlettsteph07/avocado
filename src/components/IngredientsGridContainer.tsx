import { connect, ConnectedProps } from 'react-redux'

import { IngredientsGrid } from './'

import { Ingredient } from '../types'
import { RootState } from '../types/store'

interface State {
  ingredients: Ingredient[]
}

const mapStateToProps = ({ ingredients }: RootState): State => ({
  ingredients,
})

const mapDispatchToProps = {}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {}

export const IngredientsGridContainer = connector(IngredientsGrid)
