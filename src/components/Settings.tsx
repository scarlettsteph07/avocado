import React from 'react'
import _ from 'lodash'

import { DIET_PREFERENCES } from '../lib/appConstants'
import { Picker } from './'

import styled from '../styled'
import { StyledSlatInner, StyledSlatOuter } from './styled/'

import { DietPreference } from '../types/'

interface Props {
  dietPreference: DietPreference
  updateDietPreference: Function
  updateNumberOfIngredients: Function
  numOfIngredients: number
}

export const Settings: React.FunctionComponent<Props> = ({
  dietPreference,
  updateDietPreference,
  updateNumberOfIngredients,
  numOfIngredients,
}: Props) => {
  const handleDietPreferencesOnChange = (
    dietPreference: string,
  ): void => {
    updateDietPreference(dietPreference)
  }

  const handleIngredientsOnChange = (
    numberOfIngredients: string,
  ): void => {
    const numOfIngredients = parseInt(numberOfIngredients) || ''
    updateNumberOfIngredients(numOfIngredients)
  }

  return (
    <SettingsStyles className="settings">
      <StyledSlatOuter>
        <StyledSlatInner className="settings__inner">
          <div>
            <label>{_.upperCase('diet preference')}</label>
            <Picker
              dropdownTitle="diet preference"
              wheelsData={DIET_PREFERENCES}
              value={dietPreference}
              onChange={handleDietPreferencesOnChange}
            />
          </div>
          <div>
            <label>{_.upperCase('number of ingredients:')}</label>
            <Picker
              dropdownTitle="number of ingredients"
              wheelsData={['1', '2', '3', '4', '5', '6']}
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
  }
`
