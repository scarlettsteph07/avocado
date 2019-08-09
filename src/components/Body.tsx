import React from 'react'
import axios from 'axios'

import styled from '../styled'
import { API_URL } from '../lib/appConstants'
import {
  IngredientsList,
} from './'

import { Ingredient, Payload } from '../types/'

interface Props {

}

interface State {
  isLoading: boolean,
  ingredients: Array<Ingredient>,
  payload: Payload,
}

class Body extends React.Component<Props, State> {
  state = {
    isLoading: false,
    ingredients: [],
    payload: {
      isCarnivore: false,
      numOfOptionalIngredients: 1,
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.fetchIngredients(this.setPayload())
  }

  setPayload = (): Payload => {
    return {
      "isCarnivore": this.state.payload.isCarnivore,
      "numOfOptionalIngredients": this.state.payload.numOfOptionalIngredients,
    }
  }

  fetchIngredients = (data: Object) => {
    axios.post(
      API_URL,
      data,
    )
    .then( response => {
      const { ingredients } = response.data
      this.setState({ ingredients, isLoading: false })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
    <BodyStyles className="body">
      <IngredientsList ingredients={this.state.ingredients} />
    </BodyStyles>
  )}
}

export { Body }

const BodyStyles = styled.div`
  width: 100%;
  min-height: 90vh;
  box-sizing: border-box;
  font-size: 25px;
  color: ${({ theme }) => theme.textPrimary};
  background: white;
  background: linear-gradient(0, ${({theme}) => theme.snowDrift} 8%, ${({theme}) => theme.oldPaper} 8%) 0 57px;
  background-size: 100% 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${({ theme }) => theme.medium.start} ) {
    font-size: 70px;
  }
`