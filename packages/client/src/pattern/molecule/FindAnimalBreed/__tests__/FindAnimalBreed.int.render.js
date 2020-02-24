import React from 'react'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogSelectOptions, catSelectOptions } from '../../../atom/Select/__tests__/Select.int.render'
import { dogRandomImage, catRandomImage } from '../../../atom/Image/__tests__/Image.int.render'
import { breedEntry } from '../../../../../../library/src/client/constant'

export const findDogBreedRender = (
  <FindAnimalBreed searchEntry={breedEntry.input} selectOptions={dogSelectOptions} buttonText="Search Dog" randomImage={dogRandomImage} />
)

export const findCatBreedRender = (
  <FindAnimalBreed searchEntry={breedEntry.input} selectOptions={catSelectOptions} buttonText="Search Cat" randomImage={catRandomImage} />
)
