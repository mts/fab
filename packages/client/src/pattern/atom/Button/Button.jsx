import React from 'react'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'

export function Button({ text, randomImage, setRandomImage }) {
  function onClick() {
    setRandomImage(randomImage.breed)
  }

  return (
    <button className={button} onClick={onClick} type="button">
      {text}
    </button>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
