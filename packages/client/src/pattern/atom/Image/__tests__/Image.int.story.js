import { storiesOf } from '@storybook/react'
import { dogImageRender, catImageRender } from './Image.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const dogImageRenderInfo = getInfo('dogImage')
const catImageRenderInfo = getInfo('catImage')

storiesOf('Patttern/Atom/Image', module)
  .add(dogImageRenderInfo.text, () => dogImageRender, dogImageRenderInfo.parameters)
  .add(catImageRenderInfo.text, () => catImageRender, catImageRenderInfo.parameters)
