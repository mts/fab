import { combineReducers } from 'redux'
import { API_REST_DOG_SET_RANDOM_IMAGE } from '../action/actionTypes'

export const getAppReducer = () =>
  combineReducers({
    context: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    api: (state = {}, action) => {
      switch (action.type) {
        case API_REST_DOG_SET_RANDOM_IMAGE:
          return {
            ...state,
            rest: {
              ...state.rest,
              dog: {
                ...state.rest.dog,
                randomImage: {
                  ...state.rest.dog.randomImage,
                  src: action.payload.message,
                },
              },
            },
          }
        default:
          return state
      }
    },
    ui: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
  })
