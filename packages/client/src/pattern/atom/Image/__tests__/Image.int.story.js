import { storiesOf } from '@storybook/react'
import { defaultRender } from './Image.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Image', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
