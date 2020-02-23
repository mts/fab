import { storiesOf } from '@storybook/react'
import { defaultRender } from './Input.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Input', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
