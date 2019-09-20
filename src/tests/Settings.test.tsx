import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'

import { Settings } from '../components/'
import { theme } from '../theme'

describe('Settings component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Settings
          dietPreference="carnivore"
          numOfIngredients={3}
          updateDietPreference={() => {}}
          updateNumberOfIngredients={() => {}}
        />
      </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
