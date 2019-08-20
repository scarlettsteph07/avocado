import styled from '../../styled'

export const StyledSlatInner = styled.div`
  margin: 0 20px;
  overflow: hidden;
  padding: 25px 0;
  @media (min-width: ${({theme}) => theme.large.start}) {
    margin: auto;
    width: 100%;
    max-width: ${({theme}) => theme.large.inner};
  };
  @media (min-width: ${({theme}) => theme.xlarge.start}) {
    width: 100%;
    max-width: ${({theme}) => theme.xlarge.inner};
  };
`;
