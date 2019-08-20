import React from 'react'
import Dropdown from 'react-dropdown'
import _ from 'lodash'

import { DIET_PREFERENCES } from '../lib/appConstants'

import styled from '../styled'
import {
  StyledSlatInner,
  StyledSlatOuter,
} from './styled/'

import { DietPreference } from '../types/'

interface Props {
  updateIsCarnivore: Function,
  isCarnivore: boolean,
  dietPreference: DietPreference,
  updateDietPreference: Function,
  updateNumberOfIngredients: Function,
  numOfOptionalIngredients: number,
}

export const Settings = ({
  updateIsCarnivore,
  isCarnivore,
  dietPreference,
  updateDietPreference,
  updateNumberOfIngredients,
  numOfOptionalIngredients,
}: Props) => {
  const handleCarnivoreSwitchClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    updateIsCarnivore()
  }

  const handleDietPreferencesOnChange = (e: any) => {
    updateDietPreference(e.value)
  }

  const handleIngredientsOnChange = (e: any) => {
    const numOfOptionalIngredients = parseInt(e.target.value) || ''
    updateNumberOfIngredients(numOfOptionalIngredients)
  }

  return (
    <SettingsStyles className="settings">
      <StyledSlatOuter>
        <StyledSlatInner className="settings__inner">
          <div>
            <label>Carnivore: </label>
            <input
              className={`settings__carnivore-switch ${isCarnivore ? 'checked' : ''}`}
              type="checkbox"
              onClick={handleCarnivoreSwitchClick}
            />
          </div>
          <div className='settings__diet-dropdown'>
            <Dropdown
              options={DIET_PREFERENCES}
              value={dietPreference}
              placeholder='Select an option'
              onChange={handleDietPreferencesOnChange}
            />
          </div>
          <div>
            <label>{_.startCase("number of ingredients:")}</label>
            <input
              className="settings__ingredients-input"
              type="number"
              value={numOfOptionalIngredients}
              onChange={handleIngredientsOnChange}
            />
          </div>
        </StyledSlatInner>
      </StyledSlatOuter>
    </SettingsStyles>
  )
}

const SettingsStyles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  .settings {
    &__inner {
      margin: 0;
    }
    &__carnivore-switch {
      position: relative;
      -webkit-appearance: none;
      outline: none;
      width: 50px;
      height: 30px;
      background-color: ${({ theme }) => theme.white };
      border: 1px solid ${({ theme }) => theme.lightGray };
      border-radius: 50px;
      box-shadow: inset -20px 0 0 0 ${({ theme }) => theme.white };
      :after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        background: transparent;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        box-shadow: 2px 4px 6px ${({ theme }) => theme.transparentOverlay };
      }
    }
    &__diet-dropdown {
      border: 1px solid;
    }
    &__ingredients-input {
      width: 100px;
      height: 30px;
      border: 1px solid ${({ theme }) => theme.lightGray };;
      border-radius: 10px;
      margin-left: 25px;
      font-family: ${({ theme }) => theme.baseFont};
      font-size: 25px;
      text-align: center;
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        height: 70px;
        font-size: 70px;
      }
    }
  }

  .checked {
    box-shadow: inset 20px 0 0 0 ${({ theme }) => theme.emerald};
    border-color: ${({ theme }) => theme.emerald};
    :after {
      left: 20px;
      box-shadow: -2px 4px 3px ${({ theme }) => theme.semiTransparentOverlay};
    }
  }

  label {
    text-align: right;
    clear: left;
    @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
      width: 400px;
    }
  }

  input {
      margin-left: 25px;
  }
`