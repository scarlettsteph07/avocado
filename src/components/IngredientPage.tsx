import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'

import styled from '../styled'
import { SubHeader } from './SubHeader'
import { API, API_DEV_USER } from '../lib/appConstants'
import { StyledIconButton } from './styled/StyledIconButton'

type Props = {}

export const IngredientPage: React.FunctionComponent<Props> = () => {
  const initialIngredientData = {
    name: '',
    required: false,
    style: [],
    type: [],
  }
  const [ingredient, setIngredient] = useState({
    ...initialIngredientData,
  })
  const [isLoading, setIsLoading] = useState(true)
  const { ingredientId } = useParams()

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: API.ALL.URL,
      headers: {
        'x-user-key': API_DEV_USER,
      },
    })
    isLoading &&
      axiosInstance
        .get(API.ALL.URL)
        .then((response) => {
          const ingredientsOptions = _.filter(response.data, [
            'name',
            ingredientId,
          ])
          const hasOptions =
            !_.isEmpty(ingredientsOptions) &&
            !_.isNil(ingredientsOptions)
          hasOptions && setIngredient(_.head(ingredientsOptions))
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
  })

  const titleText =
    _.isEmpty(ingredientId) || _.isNil(ingredientId)
      ? ''
      : ingredientId

  return (
    <IngredientPageStyles className="ingredient">
      <SubHeader titleText={titleText} />
      <div className="ingredient__styles">
        {!isLoading && _.isEmpty(ingredient.style) && (
          <div>No options available for {_.startCase(titleText)}</div>
        )}
        {ingredient &&
          ingredient.style.map((style, index) => {
            return (
              <div className="ingredient__styles__item" key={index}>
                {style}
                <span className="ingredient__icons">
                  <StyledIconButton className="ingredient__icons__item ingredient__icons__item--edit" />
                  <StyledIconButton className="ingredient__icons__item ingredient__icons__item--remove" />
                </span>
              </div>
            )
          })}
      </div>
    </IngredientPageStyles>
  )
}

const IngredientPageStyles = styled.div`
  .ingredient {
    &__styles {
      &__item {
        width: 100%;
        height: 105px;
        padding-left: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :hover span {
          display: flex;
          display: flex;
          justify-content: space-around;
        }
      }
    }
    &__icons {
      width: 120px;
      display: none;
      &__item {
        &--edit {
          background-image: url(/svg/icon--pencil.svg);
        }
        &--remove {
          background-image: url(/svg/icon--minus.svg);
        }
      }
    }
  }
`
