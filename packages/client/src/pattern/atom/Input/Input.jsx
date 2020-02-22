import React from 'react'
import cx from 'classnames'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'

export function Input({ className }) {
  return <div className={cx(className, input)}>Input under construction</div>
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
