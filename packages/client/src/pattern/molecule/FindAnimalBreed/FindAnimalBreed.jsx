import React from 'react'
import cx from 'classnames'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed, breedSearch, breedSearchSelect, breedSearchButton, breedShow } from './FindAnimalBreed.scss'
import { Select } from '../../atom/Select'
import { Button } from '../../atom/Button'
import { Image } from '../../atom/Image'

export function FindAnimalBreed({ className, selectOptions, buttonText, imageSource }) {
  return (
    <div className={cx(className, breed)}>
      <div className={breedSearch}>
        <Select className={breedSearchSelect} options={selectOptions} />
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
