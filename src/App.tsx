import React from 'react'

import styled from './styled'

import {
  Body,
  Header,
} from './components/'

const App = () => {
  return (
    <AppStyles className="app">
      <Header mealTitle="avocado toast" iconSource="/img/avocado.png"/>
      <Body/>
    </AppStyles>
  )
}

export default App

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.oldPaper};
`