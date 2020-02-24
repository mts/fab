import { string, shape } from 'prop-types'

export const selectDefaultProps = {}

export const selectPropTypes = {
  options: shape({
    value: string.isRequired,
    text: string.isRequired,
  }).isRequired,
}
