import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import styled from '../styled'
import { API, API_DEV_USER } from '../lib/appConstants'

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
        <div className="grid__header">
          <h1 className="grid__header__title">All Ingredients</h1>
          <button className="grid__header__add-button" />
        </div>
        <div className="grid__container">
          {!isLoading &&
            ingredients.map((ingredient, index) => {
              return (
                <div className="grid__item" key={index}>
                  {ingredient.name}
                </div>
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
    &__header {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      &__title {
        margin: 31.25px auto;
      }
      &__add-button {
        width: 25px;
        height: 25px;
        margin: 31.25px 0;
        background-image: url(/svg/icon--plus.svg);
        background-size: 25px;
        border: none;
        cursor: pointer;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          width: 50px;
          height: 50px;
          background-size: 50px;
        }
      }
    }
    &__container {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      border: 1px solid ${({ theme }) => theme.textPrimary};
    }
    &__item {
      width: 25%;
      height: 100px;
      border: 1px solid ${({ theme }) => theme.textPrimary};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
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
