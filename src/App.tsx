import React from 'react'

import { Footer, Header, Recipe } from './components/'

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="app">
      <Header />
      <Recipe />
      <Footer />
    </div>
  )
}

export default App
