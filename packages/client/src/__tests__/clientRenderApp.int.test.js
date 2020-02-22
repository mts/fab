import { defaultRender } from './clientRenderApp.int.render'
import { getAppMockStore } from '../../../library/src/store/mock'
import { mockAppState } from '../../../library/src/state/mock'

jest.mock('react-dom', () => ({ hydrate: () => {} }))
jest.mock('../store/client', () => ({ clientAppStore: {} }))

const storeClientMockObject = require('../store/client')

describe('<App />', () => {
  beforeEach(() => {
    storeClientMockObject.clientAppStore = getAppMockStore(mockAppState)
  })

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
