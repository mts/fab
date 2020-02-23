import { dogSelectRender, catSelectRender } from './Select.int.render'

jest.mock('../../../../store/thunk/completeState', () => ({ setAppCompleteStateThunk: () => {} }))

describe('<Select />', () => {
  describe('Snaphot', () => {
    test('must match dogSelectRender', () => {
      expect(global.renderToJSON(dogSelectRender)).toMatchSnapshot()
    })

    test('must match catSelectRender', () => {
      expect(global.renderToJSON(catSelectRender)).toMatchSnapshot()
    })
  })
})
