import axios from 'axios'

import { API, API_URL, API_DEV_USER } from '../lib/appConstants'

import { Payload, Ingredient, RecipeIngredient } from '../types/'

export type InitialData = {
  recipe: RecipeIngredient[]
  ingredients: Ingredient[]
}

export const fetchRecipeIngredients = (
  data: Payload,
): Promise<RecipeIngredient[]> => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      'x-user-key': API_DEV_USER,
    },
  })

  return axiosInstance
    .post(API_URL, data)
    .then(({ data }) => {
      return data.ingredients
    })
    .catch((error) => {
      console.log(error)
    })
}

export const fetchAllIngredients = (
  userId: string,
): Promise<Ingredient[]> => {
  const axiosInstance = axios.create({
    baseURL: API.ALL.URL,
    headers: {
      'x-user-key': userId,
    },
  })

  return axiosInstance
    .get(API.ALL.URL)
    .then(({ data: ingredients }) => {
      return ingredients
    })
    .catch((error) => {
      console.log(error)
    })
}

export const fetchInitialData = (
  data: Payload,
): Promise<InitialData> => {
  return Promise.all([
    fetchRecipeIngredients(data),
    fetchAllIngredients(API_DEV_USER),
  ]).then(([recipe, ingredients]) => {
    return {
      recipe,
      ingredients,
    }
  })
}

export const saveIngredient = (
  userId: string,
  data: Ingredient,
): Promise<Ingredient | void> => {
  const axiosInstance = axios.create({
    baseURL: API.NEW.URL,
    headers: {
      'x-user-key': userId,
    },
  })

  return axiosInstance
    .post(API.NEW.URL, data)
    .then(({ data }: { data: Ingredient }) => {
      const { name, required, style, type }: Ingredient = data
      return {
        name,
        required,
        style,
        type,
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
