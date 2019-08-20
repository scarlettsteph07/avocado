import React from 'react'
import axios from 'axios'

import styled from '../styled'
import { API_URL } from '../lib/appConstants'
import {
  IngredientsList,
  Settings,
} from './'
import { StyledButton } from './styled/'
import {
  StyledSlatInner,
  StyledSlatOuter,
} from './styled/'

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
      <StyledSlatOuter className="body__outer">
        <StyledSlatInner className="body__inner">
          <IngredientsList ingredients={this.state.ingredients} />
          <Settings
            updateIsCarnivore={this.updateIsCarnivore}
            isCarnivore={payload.isCarnivore}
            updateNumberOfIngredients={this.updateNumberOfIngredients}
            numOfOptionalIngredients={payload.numOfOptionalIngredients}
          />
          { !isLoading &&
            <RandomizeButton
              className="randomize-button"
              onClick={(this.handleOnButtonClick)}
            >
              Randomize!
            </RandomizeButton>
            }
          </StyledSlatInner>
        </StyledSlatOuter>
    </BodyStyles>
  )}
}

export { Body }

const BodyStyles = styled.div`
  min-height: 75vh;
  box-sizing: border-box;
  font-size: 25px;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
    font-size: 70px;
  }

  .body {
    &__outer {
      min-height: 75vh;
    }
    &__inner {
      min-height: 75vh;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
`

const RandomizeButton = styled(StyledButton)`
  width: 100%;
  height: auto;
  font-size: 25px;
  @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
    font-size: 50px;
  }
`