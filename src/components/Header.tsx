import React from 'react';

import styled from '../styled'
import { keyframes } from '@emotion/core'

export interface Props {
  mealTitle: string,
  iconSource: string,
}

export const Header = ({ mealTitle, iconSource }: Props) => {
  return (
    <HeaderStyles className="header">
      <img src={iconSource} className="header__icon"  alt="avocado"/>
      <h1 className="header__title">{mealTitle} generator</h1>
    </HeaderStyles>
  )
}

const hithere = keyframes`
  40%, 60% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
  70% { transform: rotate(0deg); }
`

const HeaderStyles = styled.header`
  height: auto;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${({ theme }) => theme.medium.start} ) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  .header {
    &__title {
      margin: 0px !important;
    }
    &__icon {
      height: 70px;
      pointer-events: none;
      animation: ${hithere} 1s ease infinite;
      @media (min-width: ${({ theme }) => theme.medium.start} ) {
        height: 160px;
      }
    }
    &__title {
      text-transform: capitalize;
      @media (min-width: ${({ theme }) => theme.medium.start} ) {
        font-size: 100px;
      }
    }
  }
`