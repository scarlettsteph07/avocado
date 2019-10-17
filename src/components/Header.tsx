import React from 'react'

import styled from '../styled'
import { APP_TITLE } from '../lib/appConstants'
import { StyledSlatInner, StyledSlatOuter } from './styled/'
import { keyframes } from '@emotion/core'

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderStyles className="header">
      <StyledSlatOuter className="header__outer">
        <StyledSlatInner className="header__inner">
          <a className="header__link" href="/">
            <img
              src="/img/avocado.png"
              className="header__icon"
              alt="avocado"
            />
            <h1 className="header__title">{APP_TITLE}</h1>
          </a>
        </StyledSlatInner>
      </StyledSlatOuter>
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
  text-align: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.textPrimary};
  .header {
    &__link {
      color: inherit;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    &__icon {
      height: 50px;
      pointer-events: none;
      /* animation: ${hithere} 1s ease infinite; */
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        height: 100px;
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop} ) {
        height: 160px;
      }
    }
    &__title {
      letter-spacing: 0.4em;
      margin: 0px !important;
      text-transform: uppercase;
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        letter-spacing: 0.2em;
        font-size: 65px;
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop} ) {
        font-size: 100px;
      }
    }
  }
`
