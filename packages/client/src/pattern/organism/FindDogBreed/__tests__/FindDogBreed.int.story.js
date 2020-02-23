import { storiesOf } from '@storybook/react'
import { defaultRender } from './FindDogBreed.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/FindDogBreed', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
