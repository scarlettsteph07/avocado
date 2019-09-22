import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { IngredientsList } from '../components/'

enzyme.configure({ adapter: new Adapter() })

describe('IngredientsList component', () => {
  const ingredients = [
    {
      name: 'avocado',
      required: true,
      style: 'avocado',
    },
    {
      name: 'bread',
      required: true,
      style: 'como',
    },
    {
      name: 'meat',
      required: false,
      style: 'bacon',
    },
  ]
  const ingredientsList = shallow(
    <IngredientsList
      ingredients={ingredients}
      updateIgnoredIngredients={() => {}}
    />,
  )

  test('should match text', () => {
    expect(ingredientsList.text()).toEqual(
      'AvocadoRemoveComoRemoveBaconRemove',
    )
  })

  test('should render three ingredients', () => {
    expect(
      ingredientsList.find('.ingredients__list-item').length,
    ).toBe(3)
  })
})
