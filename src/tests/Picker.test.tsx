import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'

import { DIET_PREFERENCES } from '../lib/appConstants'
import { Picker } from '../components/'
import { theme } from '../theme'

describe('Picker component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Picker
          dropdownTitle="diet preference"
          onChange={() => {}}
          value="carnivore"
          wheelsData={DIET_PREFERENCES}
        />
      </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
