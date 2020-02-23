import { string, shape } from 'prop-types'

export const imageDefaultProps = {
  className: '',
}

export const imagePropTypes = {
  className: string,
  source: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }).isRequired,
}
