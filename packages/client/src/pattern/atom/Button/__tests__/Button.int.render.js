import React from 'react'
import { Provider } from 'react-redux'
import { Button } from '../Button'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <Button text="Find" />
  </Provider>
)
