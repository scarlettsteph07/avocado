import React, { Fragment } from 'react'
import ReactLoading from 'react-loading'

import { Body, Error, Footer, Header } from './components/'

import { DEFAULT_PAYLOAD } from './lib/appConstants'

import { Props } from './AppContainer'

class App extends React.Component<Props> {
  componentDidMount(): void {
    const { handleFetchInitialData } = this.props
    handleFetchInitialData(DEFAULT_PAYLOAD)
  }

  render(): React.ReactNode {
    const { children, loading, error } = this.props
    return (
      <div className="app">
        <Header />
        {loading && (
          <ReactLoading
            className="loading-animation"
            type="spinningBubbles"
            color="#202020"
            height={160}
            width={160}
          />
        )}
        {error && <Error error={error} />}
        {loading ? null : (
          <Fragment>
            <Body>{children}</Body>
            <Footer />
          </Fragment>
        )}
      </div>
    )
  }
}

export default App
