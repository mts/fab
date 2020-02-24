import { apiRestDogSetRandomImageAction, apiRestCatSetRandomImageAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiRestDogSetRandomImageAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestDogSetRandomImageAction(payload)).toMatchObject({ type: 'API_REST_DOG_SET_RANDOM_IMAGE', payload })
    })
  })

  describe('apiRestCatSetRandomImageAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestCatSetRandomImageAction(payload)).toMatchObject({ type: 'API_REST_CAT_SET_RANDOM_IMAGE', payload })
    })
  })
})
