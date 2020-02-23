import { string, shape } from 'prop-types'

export const selectDefaultProps = {
  className: '',
}

export const selectPropTypes = {
  className: string,
  options: shape({
    value: string.isRequired,
    text: string.isRequired,
  }).isRequired,
}
