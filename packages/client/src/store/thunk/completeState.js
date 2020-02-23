import { apiRestDogSetRandomImageAction } from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'
import { dogSelectOptions } from '../../pattern/atom/Select/__tests__/Select.int.render'

export const setAppCompleteStateThunk = () => async dispatch => {
  const restResponseData = await getRandomDogImageByBreed(dogSelectOptions[0].value)
  dispatch(apiRestDogSetRandomImageAction(restResponseData))
}
