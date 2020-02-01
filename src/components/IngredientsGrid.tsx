import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { APPLICATION_PATHS as PATHS } from '../lib/appConstants'
import { SubHeader } from './'

import { Props } from './IngredientsGridContainer'

export class IngredientsGrid extends React.Component<Props, {}> {
  render(): React.ReactNode {
    const { ingredients } = this.props
    return (
      <IngredientsGridStyles className="ingredients-grid">
        <SubHeader titleText="All Ingredients" />
        <div className="ingredients-grid__container">
          {ingredients.map((ingredient, index) => {
            return (
              <a
                className="ingredients-grid__item"
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
      </IngredientsGridStyles>
    )
  }
}

const IngredientsGridStyles = styled.div`
  display: flex;
  flex-flow: column;
  .ingredients-grid {
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
      font-size: 20px;
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: ${({ theme }) => theme.textPrimary};
        color: ${({ theme }) => theme.white};
      }
      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: 34px;
        letter-spacing: 1px;
      }
      div {
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
