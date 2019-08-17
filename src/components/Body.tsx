import React from 'react'
import axios from 'axios'

import styled from '../styled'
import { API_URL } from '../lib/appConstants'
import {
  IngredientsList,
  Settings,
} from './'
import { StyledButton } from './styled/'

import { Ingredient, Payload } from '../types/'

interface Props {

}

interface State {
  isLoading: boolean,
  ingredients: Array<Ingredient>,
  payload: Payload,
}

class Body extends React.Component<Props, State> {
  state: State = {
    isLoading: false,
    ingredients: [],
    payload: {
      isCarnivore: false,
      dietPreference: 'carnivore',
      numOfOptionalIngredients: 1,
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.fetchIngredients(this.setPayload())
  }

  setPayload = (): Payload => {
    const { payload } = this.state
    return {
      "isCarnivore": payload.isCarnivore,
      "dietPreference": payload.dietPreference,
      "numOfOptionalIngredients": payload.numOfOptionalIngredients,
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

  handleOnButtonClick = () => {
    this.fetchIngredients(this.setPayload())
  }

  updateIsCarnivore = () => {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        isCarnivore: !this.state.payload.isCarnivore,
      }
    }), () => this.fetchIngredients(this.setPayload()))
  }

  updateNumberOfIngredients = (numOfOptionalIngredients: number) => {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        numOfOptionalIngredients,
      }
    }), () => this.fetchIngredients(this.setPayload()))
  }

  render() {
    const { isLoading, payload } = this.state
    return (
    <BodyStyles className="body">
      <Settings
        updateIsCarnivore={this.updateIsCarnivore}
        isCarnivore={payload.isCarnivore}
        dietPreference={payload.dietPreference}
        updateNumberOfIngredients={this.updateNumberOfIngredients}
        numOfOptionalIngredients={payload.numOfOptionalIngredients}
      />
      <IngredientsList ingredients={this.state.ingredients} />
      { !isLoading &&
        <RandomizeButton
          className="randomize-button"
          onClick={(this.handleOnButtonClick)}
        >
          Randomize!
        </RandomizeButton>
      }
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

const RandomizeButton = styled(StyledButton)`
  min-width: 25%;
  height: auto;
  margin: 25px auto;
  font-size: 25px;
  @media (min-width: ${({ theme }) => theme.medium.start} ) {
    font-size: 50px;
  }
`