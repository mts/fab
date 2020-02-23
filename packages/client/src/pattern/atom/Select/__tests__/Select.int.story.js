import { storiesOf } from '@storybook/react'
import { defaultRender } from './Select.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Select', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
