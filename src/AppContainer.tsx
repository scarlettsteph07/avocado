import { connect, ConnectedProps } from 'react-redux'

import App from './App'
import { handleFetchInitialData } from './actions'

import { RootState } from './types/store'

export interface State {
  loading: boolean
  error: string
}

const mapStateToProps = ({ loading, error }: RootState): State => ({
  loading,
  error,
})

const mapDispatchToProps = {
  handleFetchInitialData,
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>
export type Props = PropsFromRedux & {
  children: React.FunctionComponent
}

export const AppContainer = connector(App)
