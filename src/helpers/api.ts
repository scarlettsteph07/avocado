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

  return axiosInstance.post(API_URL, data).then(({ data }) => {
    return data.ingredients
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
        if (fingerprint) {
          return res(fingerprint)
        }
        return rej('invalid fingerprint')
      })
    }, 500)
  })
}

export const addIngredientStyle = (
  name: string,
  style: string,
  userId: string,
): Promise<Ingredient> => {
  const axiosInstance = axios.create({
    baseURL: API.NEW_STYLE.URL,
    headers: {
      'x-user-key': userId,
    },
  })
  return axiosInstance
    .post(API.NEW_STYLE.URL, { name, style })
    .then(({ data: ingredient }) => {
      delete ingredient.userId
      return ingredient
    })
    .catch((e) => {
      throw `Unable to add ingredient style. ${e}`
    })
}

export const updateIngredientStyle = (
  name: string,
  style: string,
  currentStyle: string,
  userId: string,
): Promise<Ingredient> => {
  const axiosInstance = axios.create({
    baseURL: API.UPDATE_STYLE.URL,
    headers: {
      'x-user-key': userId,
    },
  })

  return axiosInstance
    .put(API.UPDATE_STYLE.URL, {
      name,
      style,
      currentStyle,
    })
    .then(({ data: ingredient }) => {
      delete ingredient.userId
      return ingredient
    })
    .catch((e) => {
      throw `Unable to update ingredient style. ${e}`
    })
}

export const deleteStyle = (
  name: string,
  style: string,
  userId: string,
): Promise<Ingredient> => {
  const axiosInstance = axios.create({
    baseURL: API.DELETE.URL,
    headers: {
      'x-user-key': userId,
    },
  })

  return axiosInstance
    .delete(API.DELETE.URL, {
      data: { name, style },
    })
    .then(({ data: ingredient }) => {
      delete ingredient.userId
      return ingredient
    })
    .catch((e) => {
      throw `Unable to delete ingredient style. ${e}`
    })
}
