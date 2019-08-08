import React from 'react'

import styled from './styled'

import {
  Header,
} from './components/'

const App = () => {
  return (
    <AppStyles className="app">
      <Header mealTitle="avocado toast" iconSource="/img/avocado.png"/>
    </AppStyles>
  )
}

export default App

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.oldPaper};
`