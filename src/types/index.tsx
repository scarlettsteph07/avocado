export type Ingredient = {
  name: string
  style: string
  required: boolean
}

export type DietPreference = 'carnivore' | 'vegan' | 'vegetarian'

export type Payload = {
  dietPreference: DietPreference
  ignoredIngredients: Array<Ingredient>
  numOfOptionalIngredients: number
  requestedIngredients: Array<Ingredient>
}
