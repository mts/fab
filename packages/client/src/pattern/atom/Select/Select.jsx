import React from 'react'
import uuidv1 from 'uuid/v1'
import cx from 'classnames'
import { selectDefaultProps, selectPropTypes } from './Select.prop'
import { select } from './Select.scss'

export function Select({ className, options }) {
  return (
    <select className={cx(className, select)}>
      {options.map(({ value, text }) => {
        return (
          <option key={uuidv1()} value={value}>
            {text}
          </option>
        )
      })}
    </select>
  )
}

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes
