import {
  apiRestDogSetRandomImageAction,
  apiRestDogSetSearchBreedAction,
  apiRestCatSetRandomImageAction,
  apiRestCatSetSearchBreedAction,
} from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'
import { getRandomCatImageByBreed } from '../../api/rest/cat/image'
import { placeholderURL, defaultBreed, httpResponseCode } from '../../../../library/src/client/constant'

export const setAppCompleteStateThunk = () => async dispatch => {
  const restDogAPIResponseData = await getRandomDogImageByBreed(defaultBreed.dog)
  const dogImageUrl = restDogAPIResponseData.code === httpResponseCode.notFound ? placeholderURL : restDogAPIResponseData.message

  dispatch(
    apiRestDogSetRandomImageAction({
      message: dogImageUrl,
      breed: defaultBreed.dog,
    }),
  )

  dispatch(apiRestDogSetSearchBreedAction(defaultBreed.dog))

  const restCatAPIResponseData = await getRandomCatImageByBreed(defaultBreed.cat)
  const catImageUrl = restCatAPIResponseData === [] ? placeholderURL : restCatAPIResponseData[0].url

  dispatch(
    apiRestCatSetRandomImageAction({
      message: catImageUrl,
      breed: defaultBreed.cat,
    }),
  )

  dispatch(apiRestCatSetSearchBreedAction(defaultBreed.cat))
}
