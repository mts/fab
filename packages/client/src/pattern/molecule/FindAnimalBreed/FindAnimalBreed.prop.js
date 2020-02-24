import { oneOf } from 'prop-types'
import { selectPropTypes } from '../../atom/Select/Select.prop'
import { buttonPropTypes } from '../../atom/Button/Button.prop'
import { imagePropTypes } from '../../atom/Image/Image.prop'
import { breedEntry } from '../../../../../library/src/client/constant'

export const findAnimalBreedDefaultProps = {}

export const findAnimalBreedPropTypes = {
  selectOptions: selectPropTypes.options,
  buttonText: buttonPropTypes.text,
  imageSource: imagePropTypes.source,
  searchEntry: oneOf([breedEntry.select, breedEntry.input]).isRequired,
}
