import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/action/actionCreators'
import { findDogBreedDefaultProps, findDogBreedPropTypes } from './FindDogBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { dogSelectOptions } from '../../atom/Select/__tests__/Select.int.render'
import { breedEntry } from '../../../../../library/src/client/constant'

export function Component({ randomImage, apiRestDogSetRandomImageAction }) {
  function selectOnChange(selectedValue) {
    apiRestDogSetRandomImageAction({
      message: selectedValue,
    })
  }

  return (
    <FindAnimalBreed
      searchEntry={breedEntry.input}
      selectOptions={dogSelectOptions}
      selectOnchange={selectOnChange}
      buttonText="Search Dog"
      imageSource={{ src: randomImage.src, alt: randomImage.alt }}
    />
  )
}

Component.defaultProps = findDogBreedDefaultProps

Component.propTypes = findDogBreedPropTypes

export const FindDogBreed = connect(
  ({ api }) => ({
    randomImage: api.rest.dog.randomImage,
  }),
  dispatch => bindActionCreators(actionCreators, dispatch),
)(Component)
