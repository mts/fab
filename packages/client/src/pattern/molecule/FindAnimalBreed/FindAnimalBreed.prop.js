import { string } from 'prop-types'
import { selectPropTypes } from '../../atom/Select/Select.prop'

export const findAnimalBreedDefaultProps = {
  className: '',
}

export const findAnimalBreedPropTypes = {
  className: string,
  selectOptions: selectPropTypes.options,
}
