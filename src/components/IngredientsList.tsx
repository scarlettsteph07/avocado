import React from 'react'
import _ from 'lodash'
import { keyframes } from '@emotion/core'

import styled from '../styled'
import {
  StyledSlatInner,
  StyledSlatOuter,
  StyledButton,
} from './styled/'

import { Ingredient } from '../types/'

interface Props {
  ingredients: Array<Ingredient>,
  updateIgnoredIngredients: Function,
}

export const IngredientsList = ({ ingredients, updateIgnoredIngredients }: Props) => {
  return (
    <IngredientsListStyles className="ingredients">
      <StyledSlatOuter>
        <StyledSlatInner className="ingredients__inner">
          {
            _.map(
              ingredients,
              (ingredient, i) => (
                <div
                  key={i}
                  className="ingredients__list-item"
                >
                  <span>
                    {_.startCase(ingredient.style)}
                  </span>
                  <StyledButton
                    className="ingredients__list-item__remove-button"
                    onClick={() => updateIgnoredIngredients(ingredients, ingredient)}
                  >
                    Remove
                  </StyledButton>
                </div>
              )
            )
          }
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
      height: 35px;
      padding-bottom: 25px;
      display: flex;
      justify-content: space-between;
      position: relative;
      :after {
        border-bottom: 1px solid blue;
      }
      :hover::after {
        border-bottom: 1px solid green;
      }
      :hover button{
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
        @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
          font-size: 50px;
          max-height: 52px;
        }
        &:hover {
          color: ${({ theme }) => theme.red};
          box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.red};
          background-color: ${({ theme }) => theme.white};
        };
      }
    }
  }
`