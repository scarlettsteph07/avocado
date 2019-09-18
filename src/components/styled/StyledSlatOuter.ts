import styled from '../../styled'

export const StyledSlatOuter = styled.section`
  margin: auto;
  overflow: hidden;
  font-family: ${({ theme }) => theme.baseFont};
  font-weight: normal;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.xlarge.inner}) {
    max-width: ${({ theme }) => theme.xlarge.outer};
  }
`
