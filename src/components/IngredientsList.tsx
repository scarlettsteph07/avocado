import React from 'react'
import _ from 'lodash'

import styled from '../styled'

import { Ingredient } from '../types/'

interface Props {
  ingredients: Array<Ingredient>,
}

export const IngredientsList = ({ ingredients }: Props) => {
  return (
    <IngredientsListStyles className="ingredients">
      <div className="ingredients__list">
        {
          _.map(
            ingredients,
            (ingredient, i) => <div key={i} className="ingredients__list__item">{ingredient.name}</div>
          )
        }
      </div>
    </IngredientsListStyles>
  )
}

const IngredientsListStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  .ingredients {
    &__list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: space-evenly;
      &__item {
        display: flex;
        justify-content: center;
      }
    }
  }
`