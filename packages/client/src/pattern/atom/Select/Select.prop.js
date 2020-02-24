import { string, shape, object, func } from 'prop-types'

export const selectDefaultProps = {}

export const selectPropTypes = {
  options: shape({
    value: string.isRequired,
    text: string.isRequired,
  }).isRequired,
  randomImage: object.isRequired,
  setRandomImage: func.isRequired,
}
