import React from 'react'

import { Body, Footer, Header } from './components/'

const App = () => {
  return (
    <div className="app">
      <Header
        mealTitle="toast &amp; avocado"
        iconSource="/img/avocado.png"
      />
      <Body />
      <Footer />
    </div>
  )
}

export default App
