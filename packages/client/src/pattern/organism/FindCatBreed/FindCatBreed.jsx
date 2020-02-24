import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/action/actionCreators'
import { findCatBreedDefaultProps, findCatBreedPropTypes } from './FindCatBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { catSelectOptions } from '../../atom/Select/__tests__/Select.int.render'
import { breedEntry } from '../../../../../library/src/client/constant'
import { clientAppStore } from '../../../store/client'
import { setCatRandomImageThunk } from '../../../store/thunk/setRandomImage'

export function Component({ randomImage }) {
  function setRandomImage(breed) {
    clientAppStore.dispatch(setCatRandomImageThunk(breed))
  }

  return (
    <FindAnimalBreed
      searchEntry={breedEntry.input}
      selectOptions={catSelectOptions}
      buttonText="Search Cat"
      imageSource={{ src: randomImage.src, alt: randomImage.alt }}
      setRandomImage={setRandomImage}
    />
  )
}

Component.defaultProps = findCatBreedDefaultProps

Component.propTypes = findCatBreedPropTypes

export const FindCatBreed = connect(
  ({ api }) => ({
    randomImage: api.rest.cat.randomImage,
  }),
  dispatch => bindActionCreators(actionCreators, dispatch),
)(Component)
