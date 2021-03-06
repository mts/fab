import React from 'react'
import { defaultRender } from './HomeTemplate.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))
jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<HomeTemplate />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
