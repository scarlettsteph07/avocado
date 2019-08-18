export type Ingredient = {
  name: string,
  style: string,
}

export type DietPreference = "carnivore" | "vegan" | "vegetarian";

export type Payload = {
  isCarnivore: boolean,
  dietPreference: DietPreference,
  numOfOptionalIngredients: number,
}