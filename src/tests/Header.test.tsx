import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'

import { Header } from '../components/'
import { theme } from '../theme'

describe('Header component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
