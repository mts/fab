import { defaultRender } from './Button.int.render'

jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<Button />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
