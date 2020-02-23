import { storiesOf } from '@storybook/react'
import { dogSelectRender, catSelectRender } from './Select.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const dogSelectRenderInfo = getInfo('dogSelect')
const catSelectRenderInfo = getInfo('catSelect')

storiesOf('Patttern/Atom/Select', module)
  .add(dogSelectRenderInfo.text, () => dogSelectRender, dogSelectRenderInfo.parameters)
  .add(catSelectRenderInfo.text, () => catSelectRender, catSelectRenderInfo.parameters)
