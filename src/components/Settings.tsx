import React from 'react'

import styled from '../styled'

interface Props {
  updateIsCarnivore: Function,
  isCarnivore: boolean,
  updateNumberOfIngredients: Function,
  numOfOptionalIngredients: number,
}

export const Settings = ({
  updateIsCarnivore,
  isCarnivore,
  updateNumberOfIngredients,
  numOfOptionalIngredients,
}: Props) => {
  const handleCarnivoreSwitchClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    updateIsCarnivore()
  }

  const handleIngredientsOnChange = (e: any) => {
    const numOfOptionalIngredients = parseInt(e.target.value) || ''
    updateNumberOfIngredients(numOfOptionalIngredients)
  }

  return (
    <SettingsStyles className="settings">
      <div>
        <label>Carnivore: </label>
        <input
          className={`settings__carnivore-switch ${isCarnivore ? 'checked' : ''}`}
          type="checkbox"
          onClick={handleCarnivoreSwitchClick}
        />
      </div>
      <div>
        <label>Number of Ingredients:</label>
        <input
          className="settings__ingredients-input"
          type="number"
          value={numOfOptionalIngredients}
          onChange={handleIngredientsOnChange}
        />
      </div>
    </SettingsStyles>
  )
}

const SettingsStyles = styled.div`
  display: flex;
  flex-flow: column;
  .settings {
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
    &__ingredients-input {
      width: 100px;
      height: 30px;
      border: 1px solid ${({ theme }) => theme.lightGray };;
      border-radius: 10px;
      margin-left: 25px;
      font-family: ${({ theme }) => theme.baseFont};
      font-size: 25px;
      text-align: center;
      @media (min-width: ${({ theme }) => theme.medium.start} ) {
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
`