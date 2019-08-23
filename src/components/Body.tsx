import React from 'react'
import axios from 'axios'
import _ from 'lodash'

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

import {
  Ingredient,
  Payload,
  DietPreference
} from '../types/'

interface Props {

}

interface State {
  isLoading: boolean,
  ingredients: Array<Ingredient>,
  payload: Payload,
}

export class Body extends React.Component<Props, State> {
  state: State = {
    isLoading: false,
    ingredients: [],
    payload: {
      dietPreference: 'carnivore',
      numOfOptionalIngredients: 3,
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.fetchIngredients(this.setPayload())
  }

  setPayload = (): Payload => {
    const { payload } = this.state
    return {
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
      this.setState({
        ingredients: _.orderBy(ingredients, ['name', 'style'], ['asc']),
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleOnButtonClick = () => {
    this.fetchIngredients(this.setPayload())
  }

  updateDietPreference = (newDietPreference: DietPreference) => {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        dietPreference: newDietPreference,
      }
    }), () => this.fetchIngredients(this.setPayload()))
  }

  updateNumberOfIngredients = (numOfIngredients: number) => {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        numOfOptionalIngredients: numOfIngredients,
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
            dietPreference={payload.dietPreference}
            updateDietPreference={this.updateDietPreference}
            updateNumberOfIngredients={this.updateNumberOfIngredients}
            numOfIngredients={payload.numOfOptionalIngredients}
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