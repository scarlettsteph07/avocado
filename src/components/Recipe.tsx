import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { IngredientsList, Settings } from './'
import { StyledButton } from './styled/'
import { DEFAULT_PAYLOAD } from '../lib/appConstants'

import { Ingredient, Payload, DietPreference } from '../types/'
import { Props } from './RecipeContainer'

interface State {
  payload: Payload
}
export class Recipe extends React.Component<Props, State> {
  state: State = {
    payload: DEFAULT_PAYLOAD,
  }

  handleOnButtonClick = (): void => {
    const { handleFetchRecipe } = this.props
    handleFetchRecipe(this.state.payload)
  }

  updateDietPreference = (
    newDietPreference: DietPreference,
  ): void => {
    const { handleFetchRecipe } = this.props
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          dietPreference: newDietPreference,
        },
      }),
      () => handleFetchRecipe(this.state.payload),
    )
  }

  updateNumberOfIngredients = (numOfIngredients: number): void => {
    const { handleFetchRecipe } = this.props
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          numOfOptionalIngredients: numOfIngredients,
        },
      }),
      () => handleFetchRecipe(this.state.payload),
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
    const { handleFetchRecipe } = this.props
    this.setState(
      (prevState) => ({
        payload: {
          ...prevState.payload,
          ignoredIngredients,
          requestedIngredients,
        },
      }),
      () => handleFetchRecipe(this.state.payload),
    )
  }

  render(): React.ReactNode {
    const { recipe } = this.props
    const { payload } = this.state

    return (
      <RecipeStyles className="recipe">
        <IngredientsList
          ingredients={recipe}
          updateIgnoredIngredients={this.updateIgnoredIngredients}
        />
        <Settings
          dietPreference={payload.dietPreference}
          updateDietPreference={this.updateDietPreference}
          updateNumberOfIngredients={this.updateNumberOfIngredients}
          numOfIngredients={payload.numOfOptionalIngredients}
        />
        <RandomizeButton
          className="randomize-button"
          onClick={this.handleOnButtonClick}
        >
          Reset!
        </RandomizeButton>
        )
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
