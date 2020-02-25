import { getRandomCatImageByBreed } from '../image'

describe('image', () => {
  const fetchMockObject = { json: () => ({ someResponse: 'some-response' }) }

  const windowFetchMockFn = jest.fn(() => Promise.resolve(fetchMockObject))

  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(windowFetchMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('getRandomCatImageByBreed()', () => {
    test('must get random cat image by breed', async () => {
      const breed = 'some-breed'

      const response = await getRandomCatImageByBreed(breed)

      await expect(windowFetchMockFn).toHaveBeenCalledWith(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': process.env.CAT_API_KEY,
        },
        method: 'GET',
        mode: 'cors',
      })
      await expect(response).toMatchObject(fetchMockObject.json())
    })
  })
})
