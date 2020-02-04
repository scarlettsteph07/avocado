import React from 'react'
import { Link } from 'react-router-dom'

import styled from '../styled'
import {
  APP_TITLE,
  APPLICATION_PATHS as PATHS,
} from '../lib/appConstants'
import { StyledSlatInner, StyledSlatOuter } from './styled/'
import { keyframes } from '@emotion/core'

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderStyles className="header">
      <StyledSlatOuter className="header__outer">
        <StyledSlatInner className="header__inner">
          <Link className="header__link" to="/">
            <img
              src="/img/avocado.png"
              className="header__icon"
              alt="avocado"
            />
            <h1 className="header__title">{APP_TITLE}</h1>
          </Link>
          <Link className="header__settings" to={PATHS.INGREDIENTS}>
            <img src="/svg/icon--gear.svg" alt="settings" />
          </Link>
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
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__link {
      width: 75%;
      color: inherit;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        width: 80%;
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
      margin: 0px !important;
      text-transform: uppercase;
      @media (min-width: ${({ theme }) => theme.devices.tablet} ) {
        font-size: 65px;
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop} ) {
        font-size: 100px;
      }
    }
    &__settings {
      width: 25px;
      height: 25px;
      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        width: 70px;
        height: 70px;
      }
    }
  }
`
