import React from 'react'
import cx from 'classnames'
import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import { breed } from './FindAnimalBreed.scss'

export function FindAnimalBreed({ className }) {
  return <div className={cx(className, breed)}>FindAnimalBreed under construction</div>
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
