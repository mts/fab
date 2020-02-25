import React from 'react'
import { Provider } from 'react-redux'
import { FindCatBreed } from '../FindCatBreed'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import { catRandomImage } from '../../../atom/Image/__tests__/Image.int.render'

export const defaultRender = (() => {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <FindCatBreed randomImage={catRandomImage} searchBreed="some-search-breed" apiRestCatSetSearchBreedAction={() => {}} />
    </Provider>
  )
})()
