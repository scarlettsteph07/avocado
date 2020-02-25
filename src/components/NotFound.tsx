import React from 'react'
import { Link } from 'react-router-dom'

import styled from '../styled'
import { StyledSlatOuter, StyledSlatInner } from './styled/'

export const NotFound: React.FC = () => {
  return (
    <NotFoundStyles className="not-found">
      <StyledSlatOuter className="not-found__outer">
        <StyledSlatInner className="not-found__inner">
          <h1 className="not-found__message">Page Not Found</h1>
          <Link className="not-found__link-home" to="/">
            <img src="/svg/icon--home.svg" />
            Visit Homepage
          </Link>
        </StyledSlatInner>
      </StyledSlatOuter>
    </NotFoundStyles>
  )
}

const NotFoundStyles = styled.div`
  .not-found {
    &__inner {
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    &__message {
      svg {
        font-size: 30px;
      }
    }
    &__link-home {
      :hover {
        border-bottom: 2px solid;
      }
      img {
        width: 25px;
        height: 25px;
        padding-right: 10px;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
`
