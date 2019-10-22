import React from 'react'

import { Body, Footer, Header } from './components/'

type Props = {
  children: React.FunctionComponent
}

const App: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div className="app">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default App
