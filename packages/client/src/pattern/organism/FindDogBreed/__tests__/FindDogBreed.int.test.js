import { defaultRender } from './FindDogBreed.int.render'

jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<FindDogBreed />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
