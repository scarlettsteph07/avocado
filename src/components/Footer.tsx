import React from 'react'

import styled from '../styled'
import { StyledSlatInner, StyledSlatOuter } from './styled/'

export const Footer: React.FunctionComponent<{}> = () => {
  const currentTime = new Date()
  return (
    <FooterStyles className="footer">
      <StyledSlatOuter>
        <StyledSlatInner className="footer__inner">
          &copy; {currentTime.getFullYear()} Toast&Avocado. All Rights
          Reserved.
        </StyledSlatInner>
      </StyledSlatOuter>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  .footer {
    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
