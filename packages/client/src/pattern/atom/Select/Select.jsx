import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuidv1 from 'uuid/v1'
import { selectDefaultProps, selectPropTypes } from './Select.prop'
import { select } from './Select.scss'

export function Component({ options, randomImage, setRandomImage }) {
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

Component.defaultProps = selectDefaultProps

Component.propTypes = selectPropTypes

export const Select = connect(
  ({ api }) => ({
    randomImage: api.rest.dog.randomImage,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Component)
