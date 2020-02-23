import React from 'react'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogSelectOptions } from '../../../atom/Select/__tests__/Select.int.render'
import { imageSource } from '../../../atom/Image/__tests__/Image.int.render'

const searchDogButtonOnClick = () => {}

export const findDogBreedRender = (
  <FindAnimalBreed
    selectOptions={dogSelectOptions}
    buttonText="Search Dog"
    buttonOnClick={searchDogButtonOnClick}
    imageSource={imageSource}
  />
)
