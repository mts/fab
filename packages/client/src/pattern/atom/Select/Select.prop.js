import { string, shape } from 'prop-types'

export const selectDefaultProps = {
  className: '',
}

export const selectPropTypes = {
  className: string,
  options: shape({
    text: string,
  }),
}
