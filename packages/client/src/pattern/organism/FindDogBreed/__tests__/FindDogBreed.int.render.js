import React from 'react'
import { Provider } from 'react-redux'
import { FindDogBreed } from '../FindDogBreed'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const defaultRender = (() => {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <FindDogBreed />
    </Provider>
  )
})()
