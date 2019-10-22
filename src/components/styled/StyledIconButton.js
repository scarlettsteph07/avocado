import styled from '../../styled'

export const StyledIconButton = styled.button`
  width: 20px;
  height: 20px;
  margin: 31.25px 0;
  background-image: url(/svg/icon--plus.svg);
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    width: 40px;
    height: 40px;
    background-size: 40px;
  }
`
