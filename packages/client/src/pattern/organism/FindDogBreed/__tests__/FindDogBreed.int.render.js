import React from 'react'
import { Provider } from 'react-redux'
import { FindDogBreed } from '../FindDogBreed'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import { dogRandomImage } from '../../../atom/Image/__tests__/Image.int.render'

export const defaultRender = (() => {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <FindDogBreed randomImage={dogRandomImage} searchBreed="some-search-breed" apiRestDogSetSearchBreedAction={() => {}} />
    </Provider>
  )
})()
