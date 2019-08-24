import React from 'react'
import _ from 'lodash'

import styled from '../styled'

interface Props {
  dropdownTitle: string,
  wheelsData: Array<string> | Array<number>,
  value: string | number,
  onChange: Function,
}

interface State {

}

export class Picker extends React.Component<Props, State> {
  componentDidMount = () => {
    const { dropdownTitle, wheelsData, onChange } = this.props
    const MobileSelect = require('mobile-select');
    const picker = new MobileSelect({
      trigger: `#${_.kebabCase(dropdownTitle)}`,
      title: _.upperCase(dropdownTitle),
      wheels: [
        {data: wheelsData}
      ],
      ensureBtnText: 'Confirm',
      cancelBtnText: 'Cancel',
      callback: (indexArr: Array<number>, selectedData: Array<string>) => {
        onChange(_.head(selectedData))
      },
    });
    return picker
  }

  render () {
    const { dropdownTitle, value } = this.props
    return (
      <PickerStyles id={_.kebabCase(dropdownTitle)}>{value}</PickerStyles>
    )
  }
}

const PickerStyles = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 25px;
`