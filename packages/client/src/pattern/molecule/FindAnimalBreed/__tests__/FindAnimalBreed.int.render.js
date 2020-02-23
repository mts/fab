import React from 'react'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogSelectOptions } from '../../../atom/Select/__tests__/Select.int.render'

const searchDogButtonOnClick = () => {}

export const findDogBreedRender = (
  <FindAnimalBreed selectOptions={dogSelectOptions} buttonText="Search Dog" buttonOnClick={searchDogButtonOnClick} />
)
