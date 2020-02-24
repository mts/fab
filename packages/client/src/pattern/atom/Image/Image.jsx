import React from 'react'
import { imageDefaultProps, imagePropTypes } from './Image.prop'
import { image } from './Image.scss'

export function Image({ source }) {
  const { src, alt } = source

  return (
    <div className={image}>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
