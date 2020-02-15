import React from 'react'
import _ from 'lodash'
import { keyframes } from '@emotion/core'

import styled from '../styled'
import { CustomModal, Error, OptionForm, SubHeader } from './'
import { StyledIconButton } from './styled/StyledIconButton'

import { Props } from './IngredientPageContainer'

export const IngredientPage: React.FunctionComponent<Props> = ({
  ingredient,
  loading,
  handleUpdateStyle,
  handleSaveStyle,
  handleRemoveStyle,
}: Props) => {
  if (
    _.isUndefined(ingredient) ||
    _.isEmpty(ingredient) ||
    _.isNil(ingredient)
  ) {
    return <Error error="ingredient not found" />
  }

  const { name } = ingredient
  const isAvocado = name === 'avocado'

  const titleText = _.isEmpty(name) || _.isNil(name) ? '' : name

  const removeOption = (name: string, style: string): void => {
    handleRemoveStyle(name, style)
  }

  const isLastStyle = ingredient.style.length === 1

  return (
    <IngredientPageStyles className="ingredient">
      <div className="subheader__container">
        <SubHeader titleText={titleText} />
        {!isAvocado && (
          <CustomModal>
            <OptionForm
              handleOnSubmit={handleSaveStyle}
              ingredientName={name}
              title="add new style"
            />
          </CustomModal>
        )}
      </div>
      <div className="ingredient__styles">
        {!loading && _.isEmpty(ingredient.style) && (
          <div>No options available for {_.startCase(titleText)}</div>
        )}
        {ingredient &&
          ingredient.style.map((style, index) => {
            return (
              <div className="ingredient__styles__item" key={index}>
                <div className="ingredient__name">
                  {_.startCase(style)}
                </div>
                {!isAvocado && (
                  <span className="ingredient__icons">
                    <CustomModal>
                      <OptionForm
                        handleOnSubmit={handleUpdateStyle}
                        ingredientName={name}
                        styleName={style}
                        title="update style"
                      />
                    </CustomModal>
                    <StyledIconButton
                      className="ingredient__icons__item ingredient__icons__item--remove"
                      onClick={() => removeOption(name, style)}
                      disabled={isLastStyle}
                    />
                  </span>
                )}
              </div>
            )
          })}
      </div>
    </IngredientPageStyles>
  )
}

const slide = keyframes`
  100% { right: 0; }
`

const IngredientPageStyles = styled.div`
  .subheader {
    margin: 0 auto;
    &__icon {
      background-image: none;
    }
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .ingredient {
    &__name {
      height: 25px;
      white-space: normal;
      overflow: visible;
    }
    &__styles {
      &__item {
        width: 100%;
        height: 105px;
        padding-left: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        span {
          position: absolute;
          right: -100px;
          display: none;
          height: 100%;
          max-height: 32px;
        }
        :hover span {
          display: flex;
          align-items: center;
          justify-content: space-around;
          animation: ${slide} 0.7s forwards;
        }
      }
    }
    &__icons {
      width: 120px;
      display: none;
      .modal__icon--open {
        background-image: url(/svg/icon--pencil.svg);
      }
      &__item {
        &--remove {
          background-image: url(/svg/icon--minus.svg);
          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }
  }
`
