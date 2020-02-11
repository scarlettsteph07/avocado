import React from 'react'
import _ from 'lodash'
import { keyframes } from '@emotion/core'

import styled from '../styled'
import {
  StyledSlatInner,
  StyledSlatOuter,
  StyledButton,
} from './styled/'

import { RecipeIngredient } from '../types/'

interface Props {
  ingredients: Array<RecipeIngredient>
  updateIgnoredIngredients: Function
}

export const IngredientsList: React.FunctionComponent<Props> = ({
  ingredients,
  updateIgnoredIngredients,
}: Props) => {
  return (
    <IngredientsListStyles className="ingredients">
      <StyledSlatOuter>
        <StyledSlatInner className="ingredients__inner">
          {_.map(ingredients, (ingredient, i) => (
            <div key={i} className="ingredients__list-item">
              <div className="ingredient">
                <span className="ingredient__name">
                  {_.startCase(ingredient.name)}:
                </span>
                <span className="ingredient__style">
                  {_.startCase(ingredient.style)}
                </span>
              </div>
              <StyledButton
                className="ingredients__list-item__remove-button"
                onClick={() =>
                  updateIgnoredIngredients(ingredients, ingredient)
                }
              >
                Remove
              </StyledButton>
            </div>
          ))}
        </StyledSlatInner>
      </StyledSlatOuter>
    </IngredientsListStyles>
  )
}

const slide = keyframes`
  100% { right: 0; }
`

const IngredientsListStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  .ingredient {
    display: flex;
    flex-flow: column;
    &__name {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .ingredients {
    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      align-content: space-evenly;
      margin: 0;
    }
    &__list-item {
      width: 100%;
      height: 50px;
      padding-bottom: 25px;
      display: flex;
      justify-content: space-between;
      position: relative;
      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        height: 60px;
      }
      :hover button {
        display: inline;
        animation: ${slide} 0.7s forwards;
      }
      &__remove-button {
        width: auto;
        height: 100%;
        max-height: 32px;
        font-size: 25px;
        background-color: ${({ theme }) => theme.red};
        margin: 0;
        padding: 10px 10px;
        line-height: 0.5;
        position: absolute;
        right: -100px;
        display: none;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          font-size: 50px;
          max-height: 52px;
        }
        &:hover {
          color: ${({ theme }) => theme.red};
          box-shadow: inset 0px 0px 0px 2px
            ${({ theme }) => theme.red};
          background-color: ${({ theme }) => theme.white};
        }
      }
    }
  }
`
