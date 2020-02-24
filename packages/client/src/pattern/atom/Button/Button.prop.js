import { string, object, func } from 'prop-types'

export const buttonDefaultProps = {}

export const buttonPropTypes = {
  text: string.isRequired,
  randomImage: object.isRequired,
  setRandomImage: func.isRequired,
}
