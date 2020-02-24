import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/action/actionCreators'
import { findDogBreedDefaultProps, findDogBreedPropTypes } from './FindDogBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { dogSelectOptions } from '../../atom/Select/__tests__/Select.int.render'
import { breedEntry } from '../../../../../library/src/client/constant'
import { clientAppStore } from '../../../store/client'
import { setDogRandomImageThunk } from '../../../store/thunk/setRandomImage'

export function Component({ randomImage }) {
  function setRandomImage(breed) {
    clientAppStore.dispatch(setDogRandomImageThunk(breed))
  }

  return (
    <FindAnimalBreed
      searchEntry={breedEntry.input}
      selectOptions={dogSelectOptions}
      buttonText="Search Dog"
      randomImage={randomImage}
      setRandomImage={setRandomImage}
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
