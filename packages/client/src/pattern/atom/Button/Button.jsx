import React from 'react'
import cx from 'classnames'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'

export function Button({ className, text, onClick }) {
  return (
    <button className={cx(className, button)} onClick={onClick} type="button">
      {text}
    </button>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
