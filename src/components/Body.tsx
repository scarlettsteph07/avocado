import React from 'react'

import styled from '../styled'

interface Props {

}

export const Body = () => {
  return (
    <BodyStyles className="body">
    </BodyStyles>
  )
}

const BodyStyles = styled.div`
  font-size: 25px;
  width: 100%;
  height: 90vh;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPrimary};
  background: white;
  background: linear-gradient(0, ${({theme}) => theme.snowDrift} 8%, ${({theme}) => theme.oldPaper} 8%) 0 57px;
  background-size: 100% 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: ${({ theme }) => theme.medium.start} ) {
    font-size: 70px;
  }
`