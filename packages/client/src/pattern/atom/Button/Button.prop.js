import { string, func } from 'prop-types'

export const buttonDefaultProps = {
  className: '',
}

export const buttonPropTypes = {
  className: string,
  text: string.isRequired,
  onClick: func.isRequired,
}
