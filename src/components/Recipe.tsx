import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import styled from '../styled'
import { API_DEV_USER, API_URL } from '../lib/appConstants'
import { IngredientsList, Settings } from './'
import { StyledButton } from './styled/'

import { Ingredient, Payload, DietPreference } from '../types/'

interface State {
  isLoading: boolean
  ingredients: Array<Ingredient>
  payload: Payload
}

export class Recipe extends React.Component<{}, State> {
  _isMounted = false
  state: State = {
    isLoading: false,
    ingredients: [],
    payload: {
      dietPreference: 'carnivore',
      numOfOptionalIngredients: 3,
      ignoredIngredients: [],
      requestedIngredients: [],
    },
  }

  componentDidMount = (): void => {
    this._isMounted = true
    this.setState({ isLoading: true })
    this.fetchIngredients(this.setPayload())
  }

  componentWillUnmount = (): void => {
    this._isMounted = false
  }

  setPayload = (): Payload => {
    const { payload } = this.state
    return {
      dietPreference: payload.dietPreference,
      numOfOptionalIngredients: payload.numOfOptionalIngredients,
      ignoredIngredients: payload.ignoredIngredients,
      requestedIngredients: payload.requestedIngredients,
    }
  }

  fetchIngredients = (data: Payload): void => {
    const axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        'x-user-key': API_DEV_USER,
      },
    })

    axiosInstance
      .post(API_URL, data)
      .then((response) => {
        if (this._isMounted) {
          const { ingredients } = response.data
          this.setState({
            ingredients: _.orderBy(
              ingredients,
              ['name', 'style'],
              ['asc'],
            ),
            isLoading: false,
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleOnButtonClick = (): void => {
    this.fetchIngredients(this.setPayload())
  }

  updateDietPreference = (
    newDietPreference: DietPreference,
  ): void => {
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          dietPreference: newDietPreference,
        },
      }),
      () => this.fetchIngredients(this.setPayload()),
    )
  }

  updateNumberOfIngredients = (numOfIngredients: number): void => {
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          numOfOptionalIngredients: numOfIngredients,
        },
      }),
      () => this.fetchIngredients(this.setPayload()),
    )
  }

  updateIgnoredIngredients = (
    currentIngredients: Array<Ingredient>,
    ingredientToIgnore: Ingredient,
  ): void => {
    const requestedIngredients = _.remove(
      currentIngredients,
      (ingredient) => {
        return (
          JSON.stringify(ingredient) !==
          JSON.stringify(ingredientToIgnore)
        )
      },
    )
    const ignoredIngredients = this.state.payload.ignoredIngredients
    ignoredIngredients.push(ingredientToIgnore)
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          ignoredIngredients,
          requestedIngredients,
        },
      }),
      () => this.fetchIngredients(this.setPayload()),
    )
  }

  render(): React.ReactNode {
    const { isLoading, ingredients, payload } = this.state
    return (
      <RecipeStyles className="recipe">
        <IngredientsList
          ingredients={ingredients}
          updateIgnoredIngredients={this.updateIgnoredIngredients}
        />
        {!isLoading && (
          <Settings
            dietPreference={payload.dietPreference}
            updateDietPreference={this.updateDietPreference}
            updateNumberOfIngredients={this.updateNumberOfIngredients}
            numOfIngredients={payload.numOfOptionalIngredients}
          />
        )}
        {!isLoading && (
          <RandomizeButton
            className="randomize-button"
            onClick={this.handleOnButtonClick}
          >
            Reset!
          </RandomizeButton>
        )}
      </RecipeStyles>
    )
  }
}

const RecipeStyles = styled.div`
  .recipe {
  }
`

const RandomizeButton = styled(StyledButton)`
  width: 100%;
  height: auto;
  font-size: 25px;
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: 50px;
  }
`
