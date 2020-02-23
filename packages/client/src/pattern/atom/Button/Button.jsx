import React from 'react'
import cx from 'classnames'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'

export function Button({ className }) {
  return (
    <button type="button" className={cx(className, button)}>
      Fetch!
    </button>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
