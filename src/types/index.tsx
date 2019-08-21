export type Ingredient = {
  name: string,
  style: string,
}

export type DietPreference = "carnivore" | "vegan" | "vegetarian"

export type Payload = {
  dietPreference: DietPreference,
  numOfOptionalIngredients: number,
}