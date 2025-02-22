import React from 'react'

import styled from '../styled'
import { StyledSlatInner, StyledSlatOuter } from './styled/'

type Props = {
  children: React.FunctionComponent
}

export const Body: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return (
    <BodyStyles className="body">
      <StyledSlatOuter className="body__outer">
        <StyledSlatInner className="body__inner">
          {children}
        </StyledSlatInner>
        <StyledSlatInner className="body__orientation-message">
          Please rotate your device
        </StyledSlatInner>
      </StyledSlatOuter>
    </BodyStyles>
  )
}

const BodyStyles = styled.div`
  min-height: 75vh;
  box-sizing: border-box;
  font-size: 25px;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: 70px;
  }

  .body {
    &__outer {
      min-height: 75vh;
    }
    &__orientation-message {
      display: none;
      text-align: center;
      @media (max-width: ${({ theme }) =>
          theme.devices.desktop}) and (max-height: ${({ theme }) =>
          theme.medium.start}) and (orientation: landscape) {
        display: block;
      }
    }
    &__inner {
      min-height: 75vh;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      @media (max-width: ${({ theme }) =>
          theme.devices.desktop}) and (max-height: ${({ theme }) =>
          theme.medium.start}) and (orientation: landscape) {
        display: none;
      }
    }
  }
`
