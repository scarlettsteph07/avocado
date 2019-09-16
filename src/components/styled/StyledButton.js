import styled from '../../styled'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.textPrimary};
  background-image: none;
  background-position: 20px center;
  background-repeat: no-repeat;
  background-size: 15px 14px;
  box-shadow: none;
  box-sizing: border-box;
  color: black;
  display: inline-block;
  font-family: ${({ theme }) => theme.baseFont};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: 2.8px;
  text-align: center;
  color: ${({ theme }) => theme.white};
  letter-spacing: 1.5px;
  padding: 10px 15px 10px 15px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 auto 0 0;
  height: 35px;
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    box-shadow: inset 0px 0px 0px 2px
      ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.transparent};
  }
`
