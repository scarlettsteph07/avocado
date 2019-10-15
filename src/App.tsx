import React from 'react'

import { Body, Footer, Header } from './components/'

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
