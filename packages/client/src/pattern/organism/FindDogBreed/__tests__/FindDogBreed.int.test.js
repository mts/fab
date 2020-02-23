import { defaultRender } from './FindDogBreed.int.render'

describe('<FindDogBreed />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
