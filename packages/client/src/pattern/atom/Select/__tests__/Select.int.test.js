import { dogSelectRender } from './Select.int.render'

describe('<Select />', () => {
  describe('Snaphot', () => {
    test('must match dogSelectRender', () => {
      expect(global.renderToJSON(dogSelectRender)).toMatchSnapshot()
    })
  })
})
