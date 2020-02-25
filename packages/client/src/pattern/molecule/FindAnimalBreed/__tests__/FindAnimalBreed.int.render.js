import React from 'react'
import { FindAnimalBreed } from '../FindAnimalBreed'
import { dogRandomImage, catRandomImage } from '../../../atom/Image/__tests__/Image.int.render'

export const findDogBreedRender = (
  <FindAnimalBreed
    buttonText="Search Dog"
    randomImage={dogRandomImage}
    setRandomImage={() => {}}
    searchBreed="some-search-breed"
    setSearchBreed={() => {}}
  />
)

export const findCatBreedRender = (
  <FindAnimalBreed
    buttonText="Search Cat"
    randomImage={catRandomImage}
    setRandomImage={() => {}}
    searchBreed="some-search-breed"
    setSearchBreed={() => {}}
  />
)
