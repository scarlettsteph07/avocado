import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'

import { StyledButton } from '../components/styled/StyledButton'

expect.addSnapshotSerializer(serializer)

describe('StyledButton', () => {
  test('Button renders correctly', () => {
    expect(
      renderer.create(<StyledButton>Reset!</StyledButton>).toJSON(),
    ).toMatchSnapshot()
  })
})
