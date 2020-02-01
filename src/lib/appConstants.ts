import { Payload } from '../types'

export const API_URL = 'https://api.toastandavocado.xyz/v1/recipes'

export const API_DEV_USER = 'webapp-dev'

export const API = {
  ALL: {
    URL: 'https://api.toastandavocado.xyz/v1/ingredients',
    METHOD: 'GET',
  },
}

export const APPLICATION_PATHS = {
  INGREDIENTS: 'ingredients',
}

export const APP_TITLE = 'Toast & Avocado'

export const DEFAULT_PAYLOAD: Payload = {
  dietPreference: 'carnivore',
  ignoredIngredients: [],
  numOfOptionalIngredients: 3,
  requestedIngredients: [],
}

export const DIET_PREFERENCES = ['carnivore', 'vegan', 'vegetarian']
