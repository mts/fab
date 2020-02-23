import { findDogBreedRender, findCatBreedRender } from './FindAnimalBreed.int.render'

jest.mock('../../../../store/thunk/completeState', () => ({ setAppCompleteStateThunk: () => {} }))

describe('<FindAnimalBreed />', () => {
  describe('Snaphot', () => {
    test('must match findDogBreedRender', () => {
      expect(global.renderToJSON(findDogBreedRender)).toMatchSnapshot()
    })

    test('must match findCatBreedRender', () => {
      expect(global.renderToJSON(findCatBreedRender)).toMatchSnapshot()
    })
  })
})
