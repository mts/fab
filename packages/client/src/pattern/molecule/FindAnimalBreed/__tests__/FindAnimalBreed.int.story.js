import { storiesOf } from '@storybook/react'
import { findDogBreedRender } from './FindAnimalBreed.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const findDogBreedRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/FindAnimalBreed', module).add(
  findDogBreedRenderInfo.text,
  () => findDogBreedRender,
  findDogBreedRenderInfo.parameters,
)
