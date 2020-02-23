import { storiesOf } from '@storybook/react'
import { findDogBreedRender, findCatBreedRender } from './FindAnimalBreed.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const findDogBreedRenderInfo = getInfo('findDogBreed')
const findCatBreedRenderInfo = getInfo('findCatBreed')

storiesOf('Patttern/Molecule/FindAnimalBreed', module)
  .add(findDogBreedRenderInfo.text, () => findDogBreedRender, findDogBreedRenderInfo.parameters)
  .add(findCatBreedRenderInfo.text, () => findCatBreedRender, findCatBreedRenderInfo.parameters)
