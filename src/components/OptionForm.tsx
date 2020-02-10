import React from 'react'
import _ from 'lodash'

import styled from '../styled'
import { SubHeader } from './'
import { StyledButton } from './styled'

type Props = {
  closeModal?: () => void
  handleOnSubmit: (
    name: string,
    style: string,
    oldStyle: string,
  ) => void
  ingredientName: string
  styleName?: string
  title: string
}

type State = {
  styleText: string
}

export class OptionForm extends React.Component<Props, State> {
  state: State = {
    styleText: this.props.styleName || '',
  }

  saveOption = (event: React.FormEvent): void => {
    event.preventDefault()
    const {
      closeModal,
      handleOnSubmit,
      ingredientName,
      styleName,
    } = this.props
    const { styleText } = this.state
    const oldStyle = styleName || ''
    handleOnSubmit(
      _.lowerCase(ingredientName),
      _.lowerCase(styleText),
      _.lowerCase(oldStyle),
    )
    closeModal && closeModal()
  }

  handleOnChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    this.setState({
      styleText: event.currentTarget.value,
    })
  }

  render(): React.ReactNode {
    const { styleText } = this.state
    const { title } = this.props
    return (
      <OptionFormStyles>
        <SubHeader titleText={title} showBackButton={false} />
        <form
          action=""
          className="option__form"
          onSubmit={this.saveOption}
        >
          <input
            autoFocus
            id="option"
            className="option__form__text-input border"
            onChange={this.handleOnChange}
            placeholder="Style"
            type="text"
            value={styleText}
          />
          <StyledButton className="option__form__submit">
            Submit
          </StyledButton>
        </form>
      </OptionFormStyles>
    )
  }
}

const OptionFormStyles = styled.div`
  .border {
    width: 70%;
    min-height: 45px;
    border: 2px solid ${({ theme }) => theme.textPrimary};
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 5px;
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      min-height: 75px;
    }
  }

  .option {
    &__form {
      &__text-input {
        width: 100%;
        height: 35px;
        font-size: 25px;
        font-family: ${({ theme }) => theme.baseFont};
        padding: 20px 25px;
        box-sizing: border-box;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          height: 60px;
          font-size: 60px;
          padding: 20px 75px;
        }
        ::placeholder {
          color: ${({ theme }) => theme.gray};
        }
      }
      &__submit {
        width: 100%;
        height: auto;
        margin: 0 auto;
        margin-top: 5px;
        font-size: 25px;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          font-size: 50px;
        }
      }
    }
  }
`
