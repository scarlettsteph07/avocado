import axios from 'axios'

import { API_URL, API_DEV_USER } from '../lib/appConstants'

import { Payload, Ingredient } from '../types/'

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

export const fetchInitialData = (
  data: Payload,
): Promise<Ingredient[]> => {
  return fetchRecipeIngredients(data)
  // TODO: fetchAllIngredients()
}
