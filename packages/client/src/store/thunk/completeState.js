import { apiRestDogSetRandomImageAction } from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'

export const setAppCompleteStateThunk = (breed = 'collie') => async dispatch => {
  const restResponseData = await getRandomDogImageByBreed(breed)
  if (restResponseData.code !== 404) {
    dispatch(
      apiRestDogSetRandomImageAction({
        message: restResponseData.message,
        breed,
      }),
    )
  }
}
