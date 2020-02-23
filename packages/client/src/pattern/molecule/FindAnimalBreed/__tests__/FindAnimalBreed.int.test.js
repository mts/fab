import { findDogBreedRender } from './FindAnimalBreed.int.render'

describe('<FindAnimalBreed />', () => {
  describe('Snaphot', () => {
    test('must match findDogBreedRender', () => {
      expect(global.renderToJSON(findDogBreedRender)).toMatchSnapshot()
    })
  })
})
