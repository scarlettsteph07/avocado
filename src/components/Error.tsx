import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { StyledSlatOuter, StyledSlatInner } from './styled/'

type Props = { error: string }

export const Error: React.FunctionComponent<Props> = ({
  error,
}: Props) => {
  return (
    <ErrorStyles className="error">
      <StyledSlatOuter className="error__outer">
        <StyledSlatInner className="error__inner">
          <h1>Oops, something went wrong!</h1>
          <h3>{_.startCase(error)}</h3>
        </StyledSlatInner>
      </StyledSlatOuter>
    </ErrorStyles>
  )
}

const ErrorStyles = styled.div``
