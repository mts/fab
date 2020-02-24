import React from 'react'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed, breedSearch, breedSearchSelect, breedSearchButton, breedShow, breedSearchInput } from './FindAnimalBreed.scss'
import { Select } from '../../atom/Select'
import { Input } from '../../atom/Input'
import { Button } from '../../atom/Button'
import { Image } from '../../atom/Image'
import { breedEntry } from '../../../../../library/src/client/constant'

export function FindAnimalBreed({ searchEntry, selectOptions, buttonText, imageSource }) {
  return (
    <div className={breed}>
      <div className={breedSearch}>
        {searchEntry === breedEntry.select ? (
          <Select className={breedSearchSelect} options={selectOptions} />
        ) : (
          <Input className={breedSearchInput} />
        )}
        <Button className={breedSearchButton} text={buttonText} />
      </div>
      <div className={breedShow}>
        <Image source={imageSource} />
      </div>
    </div>
  )
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
