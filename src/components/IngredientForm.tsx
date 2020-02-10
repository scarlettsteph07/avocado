import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { SubHeader } from './'
import { StyledButton } from './styled/'
import { formatFormIngredient } from '../helpers/formatter'

import { Props } from './IngredientFormContainer'

interface State {
  name: string
  required: boolean
  style: string
  type: string[]
}

export class IngredientForm extends React.Component<Props, State> {
  state: State = {
    name: '',
    style: '',
    type: ['carnivore'],
    required: false,
  }

  saveIngredient = (event: React.FormEvent): void => {
    event.preventDefault()
    const { handleSaveIngredient, closeModal } = this.props
    const { name, required, style, type } = this.state
    const ingredient = {
      name,
      required,
      style: style.split(','),
      type,
    }
    handleSaveIngredient(formatFormIngredient(ingredient))
    closeModal && closeModal()
  }

  handleInputOnChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.currentTarget
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  handleCheckboxOnChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    const { type } = this.state
    const { currentTarget } = event
    const { id, checked } = currentTarget
    checked ? type.push(id) : _.remove(type, (type) => type === id)
    this.setState((prevState) => ({
      ...prevState,
      type,
    }))
  }

  handleRadioOnChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    const { currentTarget } = event
    const { id, name, checked } = currentTarget
    this.setState((prevState) => ({
      ...prevState,
      [name]: id === 'yes' ? checked : !checked,
    }))
  }

  render(): React.ReactNode {
    const { name, style, type, required } = this.state
    return (
      <IngredientFormStyles>
        <SubHeader
          titleText="add new ingredient"
          showBackButton={false}
        />
        <form
          action=""
          className="ingredient__form"
          onSubmit={this.saveIngredient}
        >
          <input
            autoFocus
            className="ingredient__form__text-input border"
            id="name"
            name="name"
            onChange={this.handleInputOnChange}
            placeholder="Name"
            required
            type="text"
            value={name}
          />
          <input
            className="ingredient__form__text-input border"
            id="style"
            name="style"
            onChange={this.handleInputOnChange}
            placeholder="Styles"
            required
            type="text"
            value={style}
          />
          <fieldset className="ingredient__form__option border">
            <legend>Type</legend>
            <div className="ingredient__form__option__item">
              <input
                checked={type.includes('carnivore')}
                id="carnivore"
                name="type"
                onChange={this.handleCheckboxOnChange}
                type="checkbox"
              />
              <label htmlFor="carnivore">Carnivore</label>
            </div>
            <div className="ingredient__form__option__item">
              <input
                checked={type.includes('vegetarian')}
                id="vegetarian"
                name="type"
                onChange={this.handleCheckboxOnChange}
                type="checkbox"
              />
              <label htmlFor="vegetarian">Vegetarian</label>
            </div>
            <div className="ingredient__form__option__item">
              <input
                checked={type.includes('vegan')}
                id="vegan"
                name="type"
                onChange={this.handleCheckboxOnChange}
                type="checkbox"
              />
              <label htmlFor="vegan">Vegan</label>
            </div>
          </fieldset>

          <fieldset className="ingredient__form__option border">
            <legend>Required</legend>
            <div className="ingredient__form__option__item">
              <input
                checked={required}
                id="yes"
                name="required"
                onChange={this.handleRadioOnChange}
                type="radio"
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="ingredient__form__option__item">
              <input
                checked={!required}
                id="no"
                name="required"
                onChange={this.handleRadioOnChange}
                type="radio"
              />
              <label htmlFor="no">No</label>
            </div>
          </fieldset>
          <StyledButton className="ingredient__form__submit">
            Save
          </StyledButton>
        </form>
      </IngredientFormStyles>
    )
  }
}

const IngredientFormStyles = styled.div`
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
          color: ${({ theme }) => theme.gray};
        }
      }
      &__option {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column;
        font-size: 20px;
        @media (min-width: ${({ theme }) => theme.medium.start}) {
          font-size: 25px;
        }
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
