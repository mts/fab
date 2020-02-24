import { API_REST_DOG_SET_RANDOM_IMAGE, API_REST_CAT_SET_RANDOM_IMAGE } from './actionTypes'

export const apiRestDogSetRandomImageAction = payload => ({ type: API_REST_DOG_SET_RANDOM_IMAGE, payload })
export const apiRestCatSetRandomImageAction = payload => ({ type: API_REST_CAT_SET_RANDOM_IMAGE, payload })
