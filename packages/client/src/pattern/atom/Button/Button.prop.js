import { string, func } from 'prop-types'

export const buttonDefaultProps = {}

export const buttonPropTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
}
