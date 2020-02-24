import React, { useRef, useEffect } from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'
import { keyCode } from '../../../../../library/src/client/constant'

export function Input({ setRandomImage }) {
  const inputRef = useRef()

  useEffect(() => inputRef.current && inputRef.current.focus())

  function onKeyUp(e) {
    if (e.keyCode === keyCode.enter) {
      setRandomImage(inputRef.current.value)
    }
  }

  return <input className={input} onKeyUp={onKeyUp} ref={inputRef} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
