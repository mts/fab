import React from 'react'
import cx from 'classnames'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed, breedSearch, breedSearchSelect, breedSearchButton } from './FindAnimalBreed.scss'
import { Select } from '../../atom/Select'
import { Button } from '../../atom/Button'

export function FindAnimalBreed({ className, selectOptions, buttonText, buttonOnClick }) {
  return (
    <div className={cx(className, breed)}>
      <div className={breedSearch}>
        <Select className={breedSearchSelect} options={selectOptions} />
        <Button className={breedSearchButton} text={buttonText} onClick={buttonOnClick} />
      </div>
    </div>
  )
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
