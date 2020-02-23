import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'
import { clientAppStore } from '../../../store/client'
import { setAppCompleteStateThunk } from '../../../store/thunk/completeState'

export function Component({ className, text, randomImage }) {
  function onClick() {
    clientAppStore.dispatch(setAppCompleteStateThunk(randomImage.breed))
  }

  return (
    <button className={cx(className, button)} onClick={onClick} type="button">
      {text}
    </button>
  )
}

Component.defaultProps = buttonDefaultProps

Component.propTypes = buttonPropTypes

export const Button = connect(
  ({ api }) => ({
    randomImage: api.rest.dog.randomImage,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Component)
