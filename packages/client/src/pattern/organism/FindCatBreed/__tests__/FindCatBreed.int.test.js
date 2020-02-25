import { defaultRender } from './FindCatBreed.int.render'

jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<FindCatBreed />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
