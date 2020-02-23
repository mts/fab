import { defaultRender } from './FindAnimalBreed.int.render'

describe('<FindAnimalBreed />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
