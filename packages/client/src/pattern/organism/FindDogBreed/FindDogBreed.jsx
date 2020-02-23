import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { findDogBreedDefaultProps, findDogBreedPropTypes } from './FindDogBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { dogSelectOptions } from '../../atom/Select/__tests__/Select.int.render'

export function Component({ className, randomImage }) {
  const searchDogButtonOnClick = () => {}

  return (
    <div className={className}>
      <FindAnimalBreed
        selectOptions={dogSelectOptions}
        buttonText="Search Dog"
        buttonOnClick={searchDogButtonOnClick}
        imageSource={{ src: randomImage.src, alt: randomImage.alt }}
      />
    </div>
  )
}

Component.defaultProps = findDogBreedDefaultProps

Component.propTypes = findDogBreedPropTypes

export const FindDogBreed = connect(
  ({ api }) => ({
    randomImage: api.rest.dog.randomImage,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Component)
