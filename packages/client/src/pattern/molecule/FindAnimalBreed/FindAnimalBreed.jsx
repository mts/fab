import React from 'react'
import cx from 'classnames'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed } from './FindAnimalBreed.scss'
import { Select } from '../../atom/Select/Select'

export function FindAnimalBreed({ className, selectOptions }) {
  return (
    <div className={cx(className, breed)}>
      <Select options={selectOptions} />
    </div>
  )
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
