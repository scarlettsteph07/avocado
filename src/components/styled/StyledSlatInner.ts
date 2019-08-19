import styled from '../../styled'

export const StyledSlatInner = styled.div`
  margin: auto;
  overflow: hidden;
  padding: 40px 0;
  @media (min-width: ${({theme}) => theme.large.start}) {
    width: 100%;
    max-width: ${({theme}) => theme.large.inner};
  };
  @media (min-width: ${({theme}) => theme.xlarge.start}) {
    width: 100%;
    max-width: ${({theme}) => theme.xlarge.inner};
  };
`;
