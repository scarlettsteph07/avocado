import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Body } from '../components/'

enzyme.configure({ adapter: new Adapter() })

describe('Body component', () => {
  const body = shallow(<Body />)

  test('should match text', () => {
    expect(body.text()).toEqual('<IngredientsList /><Settings />')
  })

  test('should render IngredientsList', () => {
    expect(body.find('IngredientsList').length).toBe(1)
  })
  test('should render Settings', () => {
    expect(body.find('Settings').length).toBe(1)
  })
})
