import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import {
  StyledSlatInner,
  StyledSlatOuter,
} from './styled/'

import { Ingredient } from '../types/'

interface Props {
  ingredients: Array<Ingredient>,
}

export const IngredientsList = ({ ingredients }: Props) => {
  return (
    <IngredientsListStyles className="ingredients">
      <StyledSlatOuter>
        <StyledSlatInner className="ingredients__inner">
          {
            _.map(
              ingredients,
              (ingredient, i) => (
                <div key={i} className="ingredients__list__item">
                  {_.startCase(ingredient.style)}
                </div>
              )
            )
          }
        </StyledSlatInner>
      </StyledSlatOuter>
    </IngredientsListStyles>
  )
}

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
    &__list__item {
      padding-bottom: 25px;
      display: flex;
      justify-content: center;
    }
  }
`