import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import styled from '../styled'
import {
  API,
  API_DEV_USER,
  APPLICATION_PATHS as PATHS,
} from '../lib/appConstants'
import { SubHeader } from './'

import { Ingredient } from '../types'

interface State {
  isLoading: boolean
  ingredients: Array<Ingredient>
}

export class Grid extends React.Component<{}, State> {
  state: State = {
    isLoading: false,
    ingredients: [],
  }
  componentDidMount = (): void => {
    this.setState({ isLoading: true })
    this.fetchAllIngredients(API_DEV_USER)
  }

  fetchAllIngredients = (userKey: string): void => {
    const axiosInstance = axios.create({
      baseURL: API.ALL.URL,
      headers: {
        'x-user-key': userKey,
      },
    })

    axiosInstance
      .get(API.ALL.URL)
      .then((response) => {
        const ingredients = response.data
        this.setState({
          ingredients: _.orderBy(
            ingredients,
            ['name', 'style'],
            ['asc'],
          ),
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(): React.ReactNode {
    const { isLoading, ingredients } = this.state
    !isLoading && console.log('ingredients: ', ingredients)
    return (
      <GridStyles className="grid">
        <SubHeader titleText="All Ingredients" />
        <div className="grid__container">
          {!isLoading &&
            ingredients.map((ingredient, index) => {
              return (
                <a
                  className="grid__item"
                  key={index}
                  href={`/${PATHS.INGREDIENTS}/${_.kebabCase(
                    ingredient.name,
                  )}`}
                >
                  <div>{ingredient.name}</div>
                </a>
              )
            })}
        </div>
      </GridStyles>
    )
  }
}

const GridStyles = styled.div`
  display: flex;
  flex-flow: column;
  .grid {
    &__container {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      border: 1px solid ${({ theme }) => theme.textPrimary};
    }
    &__item {
      width: 25%;
      height: 100px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme.textPrimary};
      box-sizing: border-box;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        text-decoration: underline;
        background-color: ${({ theme }) => theme.textPrimary};
        color: ${({ theme }) => theme.white};
      }
      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: 34px;
        letter-spacing: 1px;
      }
    }
  }
`
