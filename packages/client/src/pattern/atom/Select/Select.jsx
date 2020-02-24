import React from 'react'
import uuidv1 from 'uuid/v1'
import { selectDefaultProps, selectPropTypes } from './Select.prop'
import { select } from './Select.scss'

export function Select({ options, randomImage, setRandomImage }) {
  function onChange(e) {
    setRandomImage(e.target.value.split('-')[0])
  }

  return (
    <select className={select} onChange={onChange} onBlur={() => {}}>
      {options.map(({ value, text }) => {
        return (
          <option selected={value === randomImage.subBreed} key={uuidv1()} value={value}>
            {text}
          </option>
        )
      })}
    </select>
  )
}

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes
