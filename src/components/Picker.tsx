import React from 'react'
import _ from 'lodash'

import styled from '../styled'

interface Props {
  dropdownTitle: string
  wheelsData: Array<string>
  value: string | number
  onChange: Function
}

export class Picker extends React.Component<Props, {}> {
  componentDidMount = (): void => {
    const { dropdownTitle, wheelsData, onChange } = this.props
    const formattedWheelsData = wheelsData.map((datum) =>
      _.startCase(datum),
    )
    const MobileSelect = require('mobile-select')
    const picker = new MobileSelect({
      trigger: `#${_.kebabCase(dropdownTitle)}`,
      title: _.upperCase(dropdownTitle),
      wheels: [{ data: formattedWheelsData }],
      ensureBtnText: 'Confirm',
      cancelBtnText: 'Cancel',
      callback: (
        indexArr: Array<number>,
        selectedData: Array<string>,
      ): void => {
        onChange(_.head(selectedData))
      },
    })
    return picker
  }

  render(): React.ReactNode {
    const { dropdownTitle, value } = this.props
    return (
      <PickerStyles id={_.kebabCase(dropdownTitle)}>
        {value}
      </PickerStyles>
    )
  }
}

const PickerStyles = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 25px;
`
