import React from 'react'
import cx from 'classnames'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'

export function Button({ className }) {
  return <div className={cx(className, button)}>Button under construction</div>
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
