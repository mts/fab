import React from 'react'
import cx from 'classnames'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'

export function Input({ className }) {
  return <input className={cx(className, input)} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
