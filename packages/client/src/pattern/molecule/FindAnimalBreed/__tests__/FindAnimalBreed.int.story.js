import { storiesOf } from '@storybook/react'
import { defaultRender } from './FindAnimalBreed.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/FindAnimalBreed', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
