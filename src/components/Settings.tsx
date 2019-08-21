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
  dietPreference: DietPreference,
  updateDietPreference: Function,
  updateNumberOfIngredients: Function,
  numOfIngredients: number,
}

export const Settings = ({
  dietPreference,
  updateDietPreference,
  updateNumberOfIngredients,
  numOfIngredients,
}: Props) => {

  const handleDietPreferencesOnChange = (e: any) => {
    updateDietPreference(e.value)
  }

  const handleIngredientsOnChange = (e: any) => {
    const numOfIngredients = parseInt(e.target.value) || ''
    updateNumberOfIngredients(numOfIngredients)
  }

  return (
    <SettingsStyles className="settings">
      <StyledSlatOuter>
        <StyledSlatInner className="settings__inner">
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
              value={numOfIngredients}
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