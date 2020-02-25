import { getRandomDogImageByBreed } from '../image'

describe('image', () => {
  const fetchMockObject = { json: () => ({ someResponse: 'some-response' }) }

  const windowFetchMockFn = jest.fn(() => Promise.resolve(fetchMockObject))

  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(windowFetchMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('getRandomDogImageByBreed()', () => {
    test('must get random dog image by breed', async () => {
      const breed = 'some-breed'

      const response = await getRandomDogImageByBreed(breed)

      await expect(windowFetchMockFn).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breed}/images/random`)
      await expect(response).toMatchObject(fetchMockObject.json())
    })
  })
})
