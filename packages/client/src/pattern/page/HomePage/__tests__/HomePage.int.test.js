import React from 'react'
import { asyncRender, defaultRender } from './HomePage.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))
jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<HomePage />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match asyncRender', () => {
      expect(global.renderToJSON(asyncRender)).toMatchSnapshot()
    })

    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
