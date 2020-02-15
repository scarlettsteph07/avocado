import React from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'

import styled from '../styled'
import { StyledIconButton } from './styled/'

type Props = {
  titleText: string
  showBackButton?: boolean
}

export const SubHeader: React.FunctionComponent<Props> = ({
  titleText,
  showBackButton = true,
}: Props) => {
  const history = useHistory()
  return (
    <SubHeaderStyles className="subheader">
      {showBackButton && (
        <StyledIconButton
          className="subheader__icon__back"
          onClick={() => history.goBack()}
        />
      )}
      <h3 className="subheader__title">{_.startCase(titleText)}</h3>
    </SubHeaderStyles>
  )
}

const SubHeaderStyles = styled.div`
  width: 100%;
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
      &__back {
        background-image: url(/svg/icon--arrow-left.svg);
      }
    }
  }
`
