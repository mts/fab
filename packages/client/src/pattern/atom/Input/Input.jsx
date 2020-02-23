import React, { useRef, useEffect } from 'react'
import cx from 'classnames'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'
import { clientAppStore } from '../../../store/client'
import { setAppCompleteStateThunk } from '../../../store/thunk/completeState'

export function Input({ className }) {
  const inputRef = useRef()

  useEffect(() => inputRef.current && inputRef.current.focus())

  function onKeyUp(e) {
    if (e.keyCode === 13) {
      clientAppStore.dispatch(setAppCompleteStateThunk(inputRef.current.value))
    }
  }

  return <input className={cx(className, input)} onKeyUp={onKeyUp} ref={inputRef} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
