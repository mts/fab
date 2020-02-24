import React from 'react'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed, breedSearch, breedSearchSelect, breedSearchButton, breedShow, breedSearchInput } from './FindAnimalBreed.scss'
import { Select } from '../../atom/Select'
import { Input } from '../../atom/Input'
import { Button } from '../../atom/Button'
import { Image } from '../../atom/Image'
import { breedEntry } from '../../../../../library/src/client/constant'

export function FindAnimalBreed({ searchEntry, selectOptions, buttonText, randomImage, setRandomImage }) {
  return (
    <div className={breed}>
      <h2>Random {randomImage.breed} breed image</h2>
      <h4>Type in new breed, press enter or click search</h4>
      <div className={breedSearch}>
        {searchEntry === breedEntry.select ? (
          <Select className={breedSearchSelect} options={selectOptions} randomImage={randomImage} setRandomImage={setRandomImage} />
        ) : (
          <Input className={breedSearchInput} randomImage={randomImage} setRandomImage={setRandomImage} />
        )}
        <Button className={breedSearchButton} text={buttonText} randomImage={randomImage} setRandomImage={setRandomImage} />
      </div>
      <div className={breedShow}>
        <Image randomImage={randomImage} />
      </div>
    </div>
  )
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
