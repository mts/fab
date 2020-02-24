import { storiesOf } from '@storybook/react'
import { defaultRender } from './FindCatBreed.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/FindCatBreed', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
