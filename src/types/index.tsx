export type Ingredient = {
  name: string
  style: string
  required: boolean
}

export type DietPreference = 'carnivore' | 'vegan' | 'vegetarian'

export type Payload = {
  dietPreference: DietPreference
  numOfOptionalIngredients: number
  ignoredIngredients: Array<Ingredient>
  requestedIngredients: Array<Ingredient>
}
