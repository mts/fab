import React from 'react'
import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import { button } from './Button.scss'

export function Button({ text, setRandomImage, searchBreed }) {
  function onClick() {
    setRandomImage(searchBreed)
  }

  return (
    <button className={button} onClick={onClick} type="button">
      {text}
    </button>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
