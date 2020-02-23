import { string } from 'prop-types'
import { selectPropTypes } from '../../atom/Select/Select.prop'
import { buttonPropTypes } from '../../atom/Button/Button.prop'
import { imagePropTypes } from '../../atom/Image/Image.prop'

export const findAnimalBreedDefaultProps = {
  className: '',
}

export const findAnimalBreedPropTypes = {
  className: string,
  selectOptions: selectPropTypes.options,
  buttonText: buttonPropTypes.text,
  buttonOnClick: buttonPropTypes.onClick,
  imageSource: imagePropTypes.source,
}
