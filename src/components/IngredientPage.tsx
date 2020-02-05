import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { CustomModal, Error, OptionForm, SubHeader } from './'
import { StyledIconButton } from './styled/StyledIconButton'

import { Props } from './IngredientPageContainer'

export const IngredientPage: React.FunctionComponent<Props> = ({
  ingredient,
  loading,
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

  const titleText = _.isEmpty(name) || _.isNil(name) ? '' : name

  const removeOption = (name: string, style: string): void => {
    handleRemoveStyle(name, style)
  }

  return (
    <IngredientPageStyles className="ingredient">
      <div className="subheader__container">
        <SubHeader titleText={titleText} />
        <CustomModal>
          <OptionForm
            handleOnSubmit={handleSaveStyle}
            ingredientName={name}
          />
        </CustomModal>
      </div>
      <div className="ingredient__styles">
        {!loading && _.isEmpty(ingredient.style) && (
          <div>No options available for {_.startCase(titleText)}</div>
        )}
        {ingredient &&
          ingredient.style.map((style, index) => {
            return (
              <div className="ingredient__styles__item" key={index}>
                <span className="ingredients__name">{style}</span>
                <span className="ingredient__icons">
                  <StyledIconButton className="ingredient__icons__item ingredient__icons__item--edit" />
                  <StyledIconButton
                    className="ingredient__icons__item ingredient__icons__item--remove"
                    onClick={() => removeOption(name, style)}
                  />
                </span>
              </div>
            )
          })}
      </div>
    </IngredientPageStyles>
  )
}

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
