import React from 'react'
import { Provider } from 'react-redux'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogSelectOptions, catSelectOptions } from '../../../atom/Select/__tests__/Select.int.render'
import { dogImageSource, catImageSource } from '../../../atom/Image/__tests__/Image.int.render'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const findDogBreedRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <FindAnimalBreed selectOptions={dogSelectOptions} buttonText="Search Dog" imageSource={dogImageSource} />
  </Provider>
)

export const findCatBreedRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <FindAnimalBreed selectOptions={catSelectOptions} buttonText="Search Cat" imageSource={catImageSource} />
  </Provider>
)
