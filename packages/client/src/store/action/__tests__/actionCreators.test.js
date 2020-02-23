import { apiRestDogSetRandomImageAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiRestDogSetRandomImageAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestDogSetRandomImageAction(payload)).toMatchObject({ type: 'API_REST_DOG_SET_RANDOM_IMAGE', payload })
    })
  })
})
