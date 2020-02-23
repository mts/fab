import { apiRestDogSetRandomImageAction } from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'
import { placeholderURL } from '../../../../library/src/client/constant'

export const setAppCompleteStateThunk = (breed = 'collie') => async dispatch => {
  const restResponseData = await getRandomDogImageByBreed(breed)

  const message = restResponseData.code === 404 ? placeholderURL : restResponseData.message

  dispatch(
    apiRestDogSetRandomImageAction({
      message,
      breed,
    }),
  )
}
