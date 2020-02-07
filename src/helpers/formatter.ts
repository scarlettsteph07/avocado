import _ from 'lodash'

import { Ingredient, Payload, RecipeIngredient } from '../types'

export const formatFormIngredient = (
  ingredient: Ingredient,
): Ingredient => {
  const { name, required, style, type } = ingredient
  return {
    name: _.lowerCase(name),
    required,
    style: style.map((style) => _.lowerCase(style)),
    type: type.map((type) => _.lowerCase(type)),
  }
}

export const formatIngredients = (
  ingredients: Ingredient[],
): Ingredient[] => {
  return _.sortBy(
    ingredients.map((ing) => formatFormIngredient(ing)),
    ['name'],
  )
}

export const formatRecipeIngredient = (
  recipeIngredient: RecipeIngredient,
): RecipeIngredient => {
  return {
    name: _.lowerCase(recipeIngredient.name),
    required: recipeIngredient.required,
    style: _.lowerCase(recipeIngredient.style),
  }
}

export const formatRecipePayload = (payload: Payload): Payload => {
  const {
    dietPreference,
    ignoredIngredients,
    numOfOptionalIngredients,
    requestedIngredients,
  } = payload
  return {
    dietPreference: _.lowerCase(dietPreference),
    ignoredIngredients: ignoredIngredients.map((ingredient) =>
      formatRecipeIngredient(ingredient),
    ),
    numOfOptionalIngredients,
    requestedIngredients: requestedIngredients.map((ingredient) =>
      formatRecipeIngredient(ingredient),
    ),
  }
}
