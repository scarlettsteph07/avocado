import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { StyledIconButton } from './styled/'

type Props = {
  titleText: string
}

export const SubHeader: React.FunctionComponent<Props> = ({
  titleText,
}: Props) => {
  return (
    <SubHeaderStyles className="subheader">
      <h3 className="subheader__title">{_.startCase(titleText)}</h3>
      <StyledIconButton className="subheader__icon" />
    </SubHeaderStyles>
  )
}

const SubHeaderStyles = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: 50px;
  }
  .subheader {
    &__title {
      margin: 31.25px auto;
    }
    &__icon {
      margin: 31.25px 0;
    }
  }
`
