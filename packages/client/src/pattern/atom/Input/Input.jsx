import React, { useRef, useEffect } from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.prop'
import { input } from './Input.scss'
import { keyCode } from '../../../../../library/src/client/constant'

export function Input({ randomImage, setRandomImage, setSearchBreed }) {
  const inputRef = useRef()

  useEffect(() => inputRef.current && inputRef.current.focus())

  function onKeyUp(e) {
    setSearchBreed(inputRef.current.value)

    if (e.keyCode === keyCode.enter) {
      setRandomImage(inputRef.current.value)
    }
  }

  return <input className={input} onKeyUp={onKeyUp} ref={inputRef} placeholder={randomImage.breed} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes
