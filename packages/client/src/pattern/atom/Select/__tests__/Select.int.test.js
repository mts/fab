import { dogSelectRender, catSelectRender } from './Select.int.render'

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
