export type Ingredient = {
  name: string
  required: boolean
  style: string[]
  type: string[]
}

export type RecipeIngredient = {
  name: string
  required: boolean
  style: string
}

export type DietPreference = 'carnivore' | 'vegan' | 'vegetarian'

export type Payload = {
  dietPreference: DietPreference
  ignoredIngredients: Array<RecipeIngredient>
  numOfOptionalIngredients: number
  requestedIngredients: Array<RecipeIngredient>
}
