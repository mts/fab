import { oneOf, func, string } from 'prop-types'
import { selectPropTypes } from '../../atom/Select/Select.prop'
import { buttonPropTypes } from '../../atom/Button/Button.prop'
import { imagePropTypes } from '../../atom/Image/Image.prop'
import { breedEntry } from '../../../../../library/src/client/constant'

export const findAnimalBreedDefaultProps = {}

export const findAnimalBreedPropTypes = {
  searchEntry: oneOf([breedEntry.select, breedEntry.input]).isRequired,
  selectOptions: selectPropTypes.options,
  buttonText: buttonPropTypes.text,
  randomImage: imagePropTypes.randomImage,
  setRandomImage: func.isRequired,
  searchBreed: string.isRequired,
  setSearchBreed: func.isRequired,
}
