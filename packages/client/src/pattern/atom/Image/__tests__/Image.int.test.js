import { dogImageRender, catImageRender } from './Image.int.render'

describe('<Image />', () => {
  describe('Snaphot', () => {
    test('must match dogImageRender', () => {
      expect(global.renderToJSON(dogImageRender)).toMatchSnapshot()
    })

    test('must match catImageRender', () => {
      expect(global.renderToJSON(catImageRender)).toMatchSnapshot()
    })
  })
})
