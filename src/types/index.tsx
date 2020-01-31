export type Ingredient = {
  name: string
  required: boolean
  style: string
}

export type DietPreference = 'carnivore' | 'vegan' | 'vegetarian'

export type Payload = {
  dietPreference: DietPreference
  ignoredIngredients: Array<Ingredient>
  numOfOptionalIngredients: number
  requestedIngredients: Array<Ingredient>
}
