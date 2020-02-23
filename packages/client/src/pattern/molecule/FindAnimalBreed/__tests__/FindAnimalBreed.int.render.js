import React from 'react'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogSelectOptions, catSelectOptions } from '../../../atom/Select/__tests__/Select.int.render'
import { dogImageSource, catImageSource } from '../../../atom/Image/__tests__/Image.int.render'

const searchDogButtonOnClick = () => {}
const searchCatButtonOnClick = () => {}

export const findDogBreedRender = (
  <FindAnimalBreed
    selectOptions={dogSelectOptions}
    buttonText="Search Dog"
    buttonOnClick={searchDogButtonOnClick}
    imageSource={dogImageSource}
  />
)

export const findCatBreedRender = (
  <FindAnimalBreed
    selectOptions={catSelectOptions}
    buttonText="Search Cat"
    buttonOnClick={searchCatButtonOnClick}
    imageSource={catImageSource}
  />
)
