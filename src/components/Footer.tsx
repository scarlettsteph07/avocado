import React from 'react'

import styled from '../styled'

interface Props {

}

export const Footer = () => {
  const currentTime = new Date()
  return (
    <FooterStyles className='footer'>
      &copy; {currentTime.getFullYear()} scarlettsteph07. All Rights Reserved.
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.medium.start} ) {
    height: 70px;
  }
`