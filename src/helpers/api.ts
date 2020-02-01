import axios from 'axios'

import { API, API_URL, API_DEV_USER } from '../lib/appConstants'

import { Payload, Ingredient } from '../types/'

export type InitialData = {
  recipe: Ingredient[]
  ingredients: Ingredient[]
}

export const fetchRecipeIngredients = (
  data: Payload,
): Promise<Ingredient[]> => {
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
