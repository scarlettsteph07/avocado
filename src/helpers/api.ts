import axios from 'axios'
import Fingerprint2 from 'fingerprintjs2'

import { API, API_URL } from '../lib/appConstants'

import { Payload, Ingredient, RecipeIngredient } from '../types/'

export type InitialData = {
  recipe: RecipeIngredient[]
  ingredients: Ingredient[]
}

export const fetchRecipeIngredients = (
  userId: string,
  data: Payload,
): Promise<RecipeIngredient[]> => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      'x-user-key': userId,
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
  userId: string,
  data: Payload,
): Promise<InitialData> => {
  return Promise.all([
    fetchRecipeIngredients(userId, data),
    fetchAllIngredients(userId),
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

export const getUserId = (): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Fingerprint2.get((components) => {
        const values = components.map((component) => component.value)
        const fingerprint = Fingerprint2.x64hash128(
          values.join(''),
          31,
        )
        res(fingerprint)
      })
    }, 500)
  })
}
