import React, { Fragment } from 'react'

import { Body, Footer, Header } from './components/'

import { DEFAULT_PAYLOAD } from './lib/appConstants'

import { Props } from './AppContainer'

class App extends React.Component<Props> {
  componentDidMount(): void {
    const { handleFetchInitialData } = this.props
    handleFetchInitialData(DEFAULT_PAYLOAD)
  }

  render(): React.ReactNode {
    const { children, loading, error } = this.props
    return !error ? (
      <div className="app">
        <Header />
        {loading ? null : (
          <Fragment>
            <Body>{children}</Body>
            <Footer />
          </Fragment>
        )}
      </div>
    ) : (
        <div className="app">
          <Header />
          <Fragment>
            {error}
          </Fragment>
        </div>
      )
  }
}

export default App
