import React from 'react'
import cx from 'classnames'
import { selectDefaultProps, selectPropTypes } from './Select.prop'
import { select } from './Select.scss'

export function Select({ className }) {
  return <div className={cx(className, select)}>Select under construction</div>
}

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes
