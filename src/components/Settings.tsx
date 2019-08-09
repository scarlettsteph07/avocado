import React from 'react'

import styled from '../styled'

interface Props {
  updateIsCarnivore: Function,
  isCarnivore: boolean,
}

export const Settings = ({
  updateIsCarnivore,
  isCarnivore,
}: Props) => {
  const handleCarnivoreSwitchClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    updateIsCarnivore()
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