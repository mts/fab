import { string, shape } from 'prop-types'

export const imageDefaultProps = {}

export const imagePropTypes = {
  source: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }).isRequired,
}
