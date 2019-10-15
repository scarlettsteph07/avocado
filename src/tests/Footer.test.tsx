import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'

import { Footer } from '../components/'
import { theme } from '../theme'

describe('Footer component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
