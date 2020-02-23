import { storiesOf } from '@storybook/react'
import { dogSelectRender } from './Select.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const dogSelectRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Select', module).add(dogSelectRenderInfo.text, () => dogSelectRender, dogSelectRenderInfo.parameters)
