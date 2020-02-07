import {
  formatIngredients,
  formatFormIngredient,
  formatRecipeIngredient,
  formatRecipePayload,
} from './formatter'

describe('#formatIngredients', () => {
  const fetchedIngredients = [
    {
      name: 'Pepper',
      required: false,
      style: ['serrano', 'Jalapeno', 'HABANERO'],
      type: ['carnivore'],
    },
    {
      name: 'BEER',
      required: false,
      style: ['IPA', 'Lager', 'other'],
      type: ['Carnivore'],
    },
  ]
  const ingredient = [
    {
      name: 'beer',
      required: false,
      style: ['ipa', 'lager', 'other'],
      type: ['carnivore'],
    },
    {
      name: 'pepper',
      required: false,
      style: ['serrano', 'jalapeno', 'habanero'],
      type: ['carnivore'],
    },
  ]

  test('should return lowercased sorted ingredients', () => {
    expect(formatIngredients(fetchedIngredients)).toEqual(ingredient)
  })
})

describe('#formatFormIngredient', () => {
  const formIngredient = {
    name: 'BEER',
    required: false,
    style: ['IPA'],
    type: ['carnivore'],
  }
  const ingredient = {
    name: 'beer',
    required: false,
    style: ['ipa'],
    type: ['carnivore'],
  }

  test('should return lowercased ingredient', () => {
    expect(formatFormIngredient(formIngredient)).toEqual(ingredient)
  })
})

describe('#formatRecipeIngredient', () => {
  const ingredient = {
    name: 'Red Pepper Flakes',
    required: false,
    style: 'Red Pepper Flakes',
  }

  const recipeIngredient = {
    name: 'red pepper flakes',
    required: false,
    style: 'red pepper flakes',
  }
  test('should format recipe ingredient', () => {
    expect(formatRecipeIngredient(ingredient)).toEqual(
      recipeIngredient,
    )
  })
})

describe('#formatRecipePayload', () => {
  const payload = {
    dietPreference: 'carnivore',
    ignoredIngredients: [
      { name: 'Garlic', required: false, style: 'Minced Garlic' },
      {
        name: 'Red Pepper Flakes',
        required: false,
        style: 'Red Pepper Flakes',
      },
    ],
    numOfOptionalIngredients: 3,
    requestedIngredients: [
      { name: 'Avocado', required: true, style: 'Avocado' },
      { name: 'Bread', required: true, style: 'Bagel' },
    ],
  }

  const recipeIngredientPayload = {
    dietPreference: 'carnivore',
    ignoredIngredients: [
      { name: 'garlic', required: false, style: 'minced garlic' },
      {
        name: 'red pepper flakes',
        required: false,
        style: 'red pepper flakes',
      },
    ],
    numOfOptionalIngredients: 3,
    requestedIngredients: [
      { name: 'avocado', required: true, style: 'avocado' },
      { name: 'bread', required: true, style: 'bagel' },
    ],
  }
  test('should format recipe payload', () => {
    expect(formatRecipePayload(payload)).toEqual(
      recipeIngredientPayload,
    )
  })
})
