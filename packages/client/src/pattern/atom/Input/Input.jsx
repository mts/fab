import React, { useRef, useEffect } from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'
import { clientAppStore } from '../../../store/client'
import { setAppCompleteStateThunk } from '../../../store/thunk/completeState'
import { keyCode } from '../../../../../library/src/client/constant'

export function Input() {
  const inputRef = useRef()

  useEffect(() => inputRef.current && inputRef.current.focus())

  function onKeyUp(e) {
    if (e.keyCode === keyCode.enter) {
      clientAppStore.dispatch(setAppCompleteStateThunk(inputRef.current.value))
    }
  }

  return <input className={input} onKeyUp={onKeyUp} ref={inputRef} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
