import React from 'react'

import styled from '../styled'
import { SubHeader } from './'
import { StyledButton } from './styled/'

export const IngredientForm: React.ReactNode = () => {
  return (
    <IngredientFormStyles>
      <SubHeader titleText="add new ingredient" />
      <form className="ingredient__form" action="">
        <input
          className="ingredient__form__text-input border"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="ingredient__form__text-input border"
          type="text"
          id="style"
          name="style"
          placeholder="Style"
        />
        <fieldset className="ingredient__form__option border">
          <legend>Type</legend>
          <div className="ingredient__form__option__item">
            <input type="checkbox" id="all" name="type" />
            <label htmlFor="all">All</label>
          </div>
          <div className="ingredient__form__option__item">
            <input type="checkbox" id="carnivore" name="type" />
            <label htmlFor="carnivore">Carnivore</label>
          </div>
          <div className="ingredient__form__option__item">
            <input type="checkbox" id="vegetarian" name="type" />
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="ingredient__form__option__item">
            <input type="checkbox" id="vegan" name="type" />
            <label htmlFor="vegan">Vegan</label>
          </div>
        </fieldset>

        <fieldset className="ingredient__form__option border">
          <legend>Required</legend>
          <div className="ingredient__form__option__item">
            <input type="radio" id="yes" name="required" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="ingredient__form__option__item">
            <input type="radio" id="no" name="required" />
            <label htmlFor="no">No</label>
          </div>
        </fieldset>
        <StyledButton className="ingredient__form__submit">
          Save Ingredient
        </StyledButton>
      </form>
    </IngredientFormStyles>
  )
}

const IngredientFormStyles = styled.div`
  .subheader__icon {
    background-image: url(/svg/icon--x.svg);
  }
  .border {
    width: 70%;
    min-height: 45px;
    border: 2px solid ${({ theme }) => theme.textPrimary};
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 5px;
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      min-height: 75px;
    }
  }
  .ingredient {
    &__form {
      width: 70%;
      margin: 0 auto;
      &__text-input {
        width: 100%;
        height: 35px;
        font-size: 25px;
        font-family: ${({ theme }) => theme.baseFont};
        padding: 20px 25px;
        box-sizing: border-box;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          height: 60px;
          font-size: 60px;
          padding: 20px 75px;
        }
        ::placeholder {
          color: ${({ theme }) => theme.textPrimary};
        }
      }
      &__option {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column;
        &__item {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          @media (min-width: ${({ theme }) => theme.devices.tablet}) {
            padding: 5px 20px;
          }
          > input {
            margin-right: 25px;
          }
        }
      }
      &__submit {
        width: 100%;
        height: auto;
        margin: 0 auto;
        margin-top: 5px;
        font-size: 25px;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          font-size: 50px;
        }
      }
    }
  }
`
