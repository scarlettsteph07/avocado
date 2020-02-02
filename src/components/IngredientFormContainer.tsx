import { connect, ConnectedProps } from 'react-redux'

import { handleSaveIngredient } from '../actions/ingredients'
import { IngredientForm } from './'

import { RootState } from '../types/store'

interface State {
  loading: boolean
}

const mapStateToProps = ({ loading }: RootState): State => ({
  loading,
})

const mapDispatchToProps = {
  handleSaveIngredient,
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {
  closeModal: () => void
}

export const IngredientFormContainer = connector(IngredientForm)
